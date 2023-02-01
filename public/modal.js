const isMobile = window.innerWidth < 767;
let jobListings = [];

!function () {
  start();
}();

var JobnetModal = {
  open: () => showModal()
};

async function start() {
  renderModal();
  await fetchJobListings();
  renderJobListings();
}

function renderJobListings() {
  const modalBody = document.getElementById('_jobnet-joblistings-modal');
  modalBody.appendChild(RoleCardsContainer());
}

function renderModal() {
  const modalContainer = document.createElement('div');
  modalContainer.id = '_jobnet-joblistings-modal-container'
  const mc = modalContainer.style;
  mc.position = 'fixed';
  mc.display = 'flex';
  mc.zIndex = 1000;
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
  m.width = isMobile ? '100%' : '620px';
  m.height = 'auto';
  m.maxHeight = isMobile ? '95vh' : '85vh';
  m.minHeight = isMobile ? '95vh' : '85vh';
  m.margin = isMobile ? 'auto 0 0 0' : 'auto';
  m.borderRadius = isMobile ? '24px 24px 0px 0px' : '12px';
  m.flexDirection = 'column';
  m.boxSizing = 'border-box';
  m.alignSelf = isMobile && 'flex-end';

  modalContainer.appendChild(modal);

  modal.appendChild(ModalHeader());

  open(modalContainer);
}

function showModal() {
  window.document.body.style.overflow = 'hidden';

  const modalContainer = document.getElementById('_jobnet-joblistings-modal-container');
  const mc = modalContainer.style;
  mc.opacity = 1;
  mc.pointerEvents = 'unset';
}

// showModal
// fetchJobListings
// renderJobListings

function open(modal) {
  document.body.appendChild(modal);
  // window.document.body.style.overflow = 'hidden';
};

function close() {
  const modal = document.getElementById('_jobnet-joblistings-modal-container');
  const m = modal.style;
  m.opacity = 0;
  m.pointerEvents = 'none';
  // document.body.removeChild(modal);
  document.body.style.overflow = 'initial';
};

function createModal() {
  if (document.getElementById('_jobnet-joblistings-modal-container')) {
    return;
  }

  // ID metod 1: ge script-tag id som companyId. Ge script-tag ett className och hämta elementet via className. Ta ut id från elementet
  // const scriptTag = document.getElementsByClassName('jobnet-modal');
  // const companyId = scriptTag[0].id;
  // const scriptSrc = scriptTag[0].src;
  // console.log('companyId:', companyId);


  // ID metod 2: ge script-tag ett id. getElementById och sen ta src-parametern från elementet. Destrukturera url:en för att få ut companyId
  const scriptSrc = document.getElementById('_jobnet-modal-script').src;
  console.log('src:', scriptSrc);
  // WHEN USING EXTERNAL SCRIPT:
  // const separatedSrc = scriptSrc.split('?');
  // const companyIdFromSrc = separatedSrc[1].split('=')[1];
  // console.log(companyIdFromSrc);

  // fetchJobListings("uqfv4VO0n3dG72fmjUub");

  // const modalContainer = document.createElement('div');
  // modalContainer.id = '_jobnet-joblistings-modal-container'
  // const mb = modalContainer.style;
  // mb.position = 'fixed';
  // mb.display = 'flex';
  // mb.zIndex = 1000;
  // mb.inset = 0;
  // mb.backgroundColor = 'rgba(48, 50, 56, 0.5)';
  // mb.justifyContent = 'center';
  // mb.alignItems = 'center;'

  // const modal = document.createElement('div');
  // const m = modal.style;
  // modal.id = '_jobnet-joblistings-modal';
  // m.backgroundColor = '#F7FAFC';
  // m.display = 'flex';
  // m.width = isMobile ? '100%' : '620px';
  // m.height = 'auto';
  // m.maxHeight = isMobile ? '95vh' : '85vh';
  // m.margin = isMobile ? 'auto 0 0 0' : 'auto';
  // m.borderRadius = isMobile ? '24px 24px 0px 0px' : '12px';
  // m.flexDirection = 'column';
  // m.boxSizing = 'border-box';
  // m.alignSelf = isMobile && 'flex-end';

  // modalContainer.appendChild(modal);

  // modal.appendChild(ModalHeader());
  // modal.appendChild(RoleCardsContainer());

  // open(modalContainer);
}

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
  closeButton.onclick = () => close();

  return closeButton;
}

function Title() {
  const modalText = document.createElement('h4');
  modalText.textContent = 'Se våra lediga jobb på Jobnet.se';
  const mt = modalText.style;
  mt.color = '#303238';
  mt.fontSize = '18px';
  mt.lineHeight = '135%';
  mt.fontWeight = 700;

  return modalText;
}

function ModalHeader() {
  const modalHeader = document.createElement('div');
  const mh = modalHeader.style;
  mh.display = 'flex';
  mh.alignItems = 'center';
  mh.justifyContent = 'space-between';
  mh.marginTop = isMobile ? '5px' : '20px';
  mh.padding = isMobile ? '0 24px' : '0 40px';

  modalHeader.appendChild(Title());
  modalHeader.appendChild(CloseModalButton());

  return modalHeader;
}

function RoleCardsContainer() {
  const container = document.createElement('div');
  const c = container.style;
  c.display = isMobile ? 'grid' : 'flex';
  c.gridTemplateColumns = '100%'
  c.flexDirection = 'column';
  c.gap = '9px';
  c.overflowY = isMobile ? 'auto' : 'scroll';
  c.margin = isMobile ? '0 24px 12px 24px' : '0 40px 40px 40px';
  c.paddingRight = !isMobile && '8px';
  c.maxHeight = isMobile && '400px';

  if (jobListings.length) {
    jobListings.map((jobListing) => {
      container.appendChild(ModalRoleCard(jobListing));
    })
  } else {
    container.appendChild(document.createElement('span').textContent = 'Just nu finns inga lediga tjänster')
  }

  return container;
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
      typeText.textContent = jobListing.type === 'DORMANT' ? 'Vilade intresse' : 'Prioriterad ansökan';
      const tt = typeText.style;
      tt.color = '#586d79';
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
  rc.backgroundColor = 'white'
  rc.display = 'flex';
  rc.marginBottom = '3px';
  rc.boxShadow = 'rgb(0 0 0 / 6%) 0px 3px 0px';
  rc.borderRadius = '12px';
  rc.overflow = 'hidden';
  rc.minHeight = isMobile ? 'unset' : '115px';

  !isMobile && roleCard.appendChild(RoleCardImage());
  roleCard.appendChild(RoleCardContent());

  return roleCard;
}

function getCompanyIdFromSrcUrl() {
  // ID metod 2: ge script-tag ett id. getElementById och sen ta src-parametern från elementet. Destrukturera url:en för att få ut companyId
  const scriptSrc = document.getElementById('_jobnet-modal-script').src;
  // console.log('src:', scriptSrc);
  // WHEN USING EXTERNAL SCRIPT:
  const separatedSrc = scriptSrc.split('?');
  const companyIdFromSrc = separatedSrc[1].split('=')[1];
  console.log(companyIdFromSrc);

  return companyIdFromSrc;
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
            lastUpdated
            tags {
              societalBenefit {
                showInAd
              }
              environmentalChoices {
                showInAd
              }
              promotesDiversity {
                showInAd
              }
            }
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
              languageCodes
              type
            }
          }
        }
      `,
      variables: {
        companyId
        // companyId: "uqfv4VO0n3dG72fmjUub"
      }
    })
  })
    .then((res) => res.json())
    .then((result) => {
      console.log(result);
      jobListings = result.data.company.jobListings
      // createModal();
    })
}
