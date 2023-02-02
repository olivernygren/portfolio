const isSmallScreen = window.innerWidth < 767;
let jobListings = [];

!function () {
  generateModal();
}();

var JobnetModal = {
  open: () => showModal()
};

async function generateModal() {
  renderModalInDOM();
  await fetchJobListings();
  renderJobListings();
}

function renderModalInDOM() {
  const modalContainer = document.createElement('div');
  modalContainer.id = '_jobnet-joblistings-modal-container'
  const mc = modalContainer.style;
  mc.position = 'fixed';
  mc.display = 'flex';
  mc.zIndex = 10000000;
  mc.inset = 0;
  mc.backgroundColor = 'rgba(48, 50, 56, 0.5)';
  mc.justifyContent = 'center';
  mc.alignItems = 'center;'
  mc.opacity = 0;
  mc.pointerEvents = 'none';

  const modal = document.createElement('div');
  const m = modal.style;
  modal.id = '_jobnet-joblistings-modal';
  m.backgroundColor = '#F7FAFC';
  m.display = 'flex';
  m.width = isSmallScreen ? '100%' : '620px';
  m.height = 'auto';
  m.maxHeight = isSmallScreen ? '95vh' : '85vh';
  m.margin = isSmallScreen ? 'auto 0 0 0' : 'auto';
  m.borderRadius = isSmallScreen ? '24px 24px 0px 0px' : '12px';
  m.flexDirection = 'column';
  m.boxSizing = 'border-box';
  m.alignSelf = isSmallScreen && 'flex-end';

  modalContainer.appendChild(modal);
  modal.appendChild(ModalHeader());

  document.body.appendChild(modalContainer);
}

async function fetchJobListings() {
  const companyId = getCompanyIdFromSrcUrl();

  await fetch('https://api-dev-dot-stable-glass-326613.ew.r.appspot.com/api/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      query: `
        query CompanyJobListings($companyId: String!) {
          company(id: $companyId) {
            documentId
            companyName
            jobListingDefaultCoverImage {
              accessUrl
            }
            jobListings {
              documentId
              titleV2 {
                entries {
                  iso6391Code
                  text
                }
              }
              urlSlug
              coverImage {
                accessUrl
              }
              type
            }
          }
        }
      `,
      variables: {
        companyId
      }
    })
  })
    .then((res) => res.json())
    .then((result) => {
      console.log(result);
      if (result.data.company.jobListings.length) {
        jobListings = result.data.company.jobListings;
      } else {
        jobListings = [];
      }
    })
    .catch((error) => {
      console.log(error)
      jobListings = [];
    })
}

function renderJobListings() {
  const modalBody = document.getElementById('_jobnet-joblistings-modal');
  modalBody.appendChild(RoleCardsContainer());
}

function showModal() {
  setBodyScroll('disabled');
  const modalContainer = document.getElementById('_jobnet-joblistings-modal-container');
  const mc = modalContainer.style;
  mc.opacity = 1;
  mc.pointerEvents = 'unset';
};

function closeModal() {
  const modal = document.getElementById('_jobnet-joblistings-modal-container');
  const m = modal.style;
  m.opacity = 0;
  m.pointerEvents = 'none';
  setBodyScroll('enabled');
};

function setBodyScroll(set) {
  if (set === 'enabled') {
    window.document.body.style.overflow = 'initial';
  } else if (set === 'disabled') {
    window.document.body.style.overflow = 'hidden';
  }
  return;
}

function extractQueryVariablesFromSrc(scriptSrc) {
  const separatedPathAndQueryVars = scriptSrc.split('?');
  const queryVariables = separatedPathAndQueryVars[1];
  const separatedUrlQueryVariables = queryVariables.split('&');

  const companyIdUrlVariable = separatedUrlQueryVariables.find(srcString => srcString.includes('companyId='));
  const languageUrlVariable = separatedUrlQueryVariables.find(srcString => srcString.includes('lang='));

  const companyId = companyIdUrlVariable.split('=')[1];
  const language = languageUrlVariable.split('=')[1];

  return { companyId, language };
}

function getCompanyIdFromSrcUrl() {
  const scriptSrc = document.getElementById('_jobnet-modal-script').src;

  if (scriptSrc.includes('?')) { // a "?" in the url indicates that query variables are present
    const { companyId } = extractQueryVariablesFromSrc(scriptSrc);
    return companyId;
  } else {
    return 'uqfv4VO0n3dG72fmjUub';
  }
}

function sortRolesByType(jobListings) {
  const dormantJobListings = jobListings.filter(jobListing => jobListing.type === 'DORMANT');
  const otherJobListings = jobListings.filter(jobListing => jobListing.type !== 'DORMANT');

  let sortedJobListings;

  if (dormantJobListings) {
    sortedJobListings = otherJobListings.concat(dormantJobListings)
  } else {
    sortedJobListings = otherJobListings;
  }

  return sortedJobListings;
}

function getTranslation(text) {
  const scriptSrc = document.getElementById('_jobnet-modal-script').src;
  const { language } = extractQueryVariablesFromSrc(scriptSrc);

  switch (text) {
    case 'title':
      if (language === 'sv') return 'Se våra lediga jobb på Jobnet.se';
      if (language === 'en') return 'View all our available positions at Jobnet.se';
    case 'no-jobs':
      if (language === 'sv') return 'Just nu har vi inga lediga tjänster';
      if (language === 'en') return 'No available positions at this moment in time';
    case 'dormant':
      if (language === 'sv') return 'Vilade intresse';
      if (language === 'en') return 'Future interest';
    case 'prioritized':
      if (language === 'sv') return 'Prioriterad ansökan';
      if (language === 'en') return 'Prioritized application';
    default:
      return '';
  }
}

function ModalHeader() {
  function CloseModalButton() {
    const closeButton = document.createElement('button');

    const cb = closeButton.style;
    cb.border = 'none';
    cb.borderRadius = '50%';
    cb.backgroundColor = 'transparent';
    cb.cursor = 'pointer';
    cb.display = 'flex';
    cb.alignItems = 'center';

    const xIcon = document.createElement('img');
    xIcon.src = "icons/24/X.svg";

    closeButton.appendChild(xIcon);
    closeButton.onclick = () => closeModal();

    return closeButton;
  }

  function ModalTitle() {
    const modalText = document.createElement('h4');
    modalText.textContent = getTranslation('title');
    const mt = modalText.style;
    mt.color = '#303238';
    mt.fontSize = '18px';
    mt.lineHeight = '135%';
    mt.fontWeight = 700;

    return modalText;
  }

  const modalHeader = document.createElement('div');
  const mh = modalHeader.style;
  mh.display = 'flex';
  mh.alignItems = 'center';
  mh.justifyContent = 'space-between';
  mh.marginTop = isSmallScreen ? '5px' : '20px';
  mh.padding = isSmallScreen ? '0 24px' : '0 40px';

  modalHeader.appendChild(ModalTitle());
  modalHeader.appendChild(CloseModalButton());

  return modalHeader;
}

function RoleCardsContainer() {
  const container = document.createElement('div');
  const c = container.style;
  c.display = isSmallScreen ? 'grid' : 'flex';
  c.gridTemplateColumns = '100%'
  c.flexDirection = 'column';
  c.gap = '9px';
  c.overflowY = isSmallScreen ? 'auto' : 'scroll';
  c.margin = isSmallScreen ? '0 24px 12px 24px' : '0 40px 40px 40px';
  c.paddingRight = !isSmallScreen && '8px';
  c.maxHeight = isSmallScreen && '400px';

  if (jobListings.length) {
    const sortedJobListings = sortRolesByType(jobListings);
    sortedJobListings.map((jobListing) => {
      container.appendChild(ModalRoleCard(jobListing));
    })
  } else {
    const emptyText = document.createElement('span');
    emptyText.textContent = getTranslation('no-jobs');
    const et = emptyText.style;
    et.color = '#586D79';
    container.appendChild(emptyText);
  }

  return container;
}

function getJobListingTypeText(type) {
  if (type === 'DORMANT') {
    return getTranslation('dormant');
  } else {
    return getTranslation('prioritized');
  }
}

function ModalRoleCard(jobListing) {
  function RoleCardImage() {
    const image = document.createElement('img');
    image.src = jobListing.coverImage.accessUrl ? jobListing.coverImage.accessUrl : jobListing.company.jobListingDefaultCoverImage.accessUrl;
    const i = image.style;
    i.height = '115px';
    i.width = '140px';
    i.aspectRatio = '160 / 115';
    i.objectFit = 'cover';
    i.backgroundColor = '#F0F4F6';

    return image;
  }

  function RoleCardContent() {
    function RoleCardTitle() {
      const titleContainer = document.createElement('div');
      const tc = titleContainer.style;
      tc.display = 'flex';
      tc.width = '100%';

      const title = document.createElement('span');
      title.textContent = jobListing.titleV2.entries[0].text;
      const t = title.style;
      t.color = '#303238';
      t.fontSize = 400;
      t.fontSize = '16px';

      titleContainer.appendChild(title);

      return titleContainer;
    }

    function RoleCardType() {
      const type = document.createElement('div');
      const t = type.style;
      t.display = 'flex';
      t.alignItems = 'center';
      t.marginBottom = '8px';

      const typeText = document.createElement('span');
      typeText.textContent = getJobListingTypeText(jobListing.type);
      const tt = typeText.style;
      tt.color = '#586D79';
      tt.fontSize = '14px';
      tt.lineHeight = '135%';
      tt.fontWeight = 400;

      const typeIconContainer = document.createElement('div');
      const tic = typeIconContainer.style;
      tic.backgroundColor = '#F0F4F6';
      tic.height = '24px';
      tic.width = '24px';
      tic.display = 'flex';
      tic.alignItems = 'center';
      tic.justifyContent = 'center';
      tic.borderRadius = '100%';
      tic.marginRight = '8px';

      const typeIcon = document.createElement('img');
      typeIcon.src = jobListing.type === 'DORMANT' ? 'icons/16/Time.svg' : 'icons/16/Continuous.svg';

      typeIconContainer.appendChild(typeIcon);
      type.appendChild(typeIconContainer);
      type.appendChild(typeText);

      return type;
    }

    const content = document.createElement('a');
    content.href = `https://jobnet.se/${jobListing.urlSlug}`;
    content.target = '_blank';
    const c = content.style;
    c.padding = '16px';
    c.flex = '1 1 0%';
    c.display = 'flex';
    c.flexDirection = 'column';
    c.justifyContent = 'start';
    c.cursor = 'pointer';
    c.textDecoration = 'none';

    content.appendChild(RoleCardType());
    content.appendChild(RoleCardTitle());

    return content;
  }

  const roleCard = document.createElement('div');
  const rc = roleCard.style;
  rc.backgroundColor = 'white';
  rc.display = 'flex';
  rc.marginBottom = '3px';
  rc.boxShadow = 'rgb(0 0 0 / 6%) 0px 3px 0px';
  rc.borderRadius = '12px';
  rc.overflow = 'hidden';
  rc.minHeight = isSmallScreen ? 'unset' : '115px';

  !isSmallScreen && roleCard.appendChild(RoleCardImage());
  roleCard.appendChild(RoleCardContent());

  return roleCard;
}
