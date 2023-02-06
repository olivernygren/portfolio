/* eslint-disable no-fallthrough */
const isSmallScreen = window.innerWidth < 767;
let jobListings = [];

// eslint-disable-next-line no-unused-expressions
!function () {
  console.log('generera');
  generateModal();
}();

// eslint-disable-next-line no-unused-vars
var JobnetModal = {
  open: () => showModal()
};

async function generateModal() {
  renderModalInDOM();
  await fetchJobListings();
  renderJobListings();
}

function renderModalInDOM() {
  console.log('renderModalInDOM');
  const modalContainer = document.createElement('div');
  modalContainer.id = '_jobnet-joblistings-modal-container';
  setStyling(modalContainer, `
    position: fixed;
    display: flex;
    z-index: 10000000;
    inset: 0;
    background-color: rgba(48, 50, 56, 0.5);
    justify-content: center;
    align-items: center;
    opacity: 0;
    pointer-events: none;
  `);

  const modal = document.createElement('div');
  modal.id = '_jobnet-joblistings-modal';
  setStyling(modal, `
    background-color: #F7FAFC;
    display: flex;
    width: ${isSmallScreen ? '100%' : '620px'};
    height: auto;
    max-height: ${isSmallScreen ? '95vh' : '85vh'};
    margin: ${isSmallScreen ? 'auto 0 0 0' : 'auto'};
    border-radius: ${isSmallScreen ? '24px 24px 0px 0px' : '12px'};
    flex-direction: column;
    box-sizing: border-box;
    align-self: ${isSmallScreen && 'flex-end'};
  `)

  modalContainer.appendChild(modal);
  modal.appendChild(ModalHeader());

  document.body.appendChild(modalContainer);
}

async function fetchJobListings() {
  console.log('fetchJobListings');
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
      console.log('result:', result);
      if (result.data.company.jobListings.length) {
        jobListings = result.data.company.jobListings;
      } else {
        jobListings = [];
      }
    })
    .catch((error) => {
      console.log(error);
      jobListings = [];
    })
}

function renderJobListings() {
  console.log('renderJobListings');
  const modalBody = document.getElementById('_jobnet-joblistings-modal');
  modalBody.appendChild(RoleCardsContainer());
}

function showModal() {
  setPageScroll('disabled');
  const modalContainer = document.getElementById('_jobnet-joblistings-modal-container');
  setStyling(modalContainer, `
    opacity: 1;
    pointer-events: unset;
    position: fixed;
    display: flex;
    z-index: 10000000;
    inset: 0;
    background-color: rgba(48, 50, 56, 0.5);
    justify-content: center;
    align-items: center;
  `)
};

function closeModal() {
  const modalContainer = document.getElementById('_jobnet-joblistings-modal-container');
  setStyling(modalContainer, `
    display: none;
  `)
  setPageScroll('enabled');
};

function setPageScroll(set) {
  if (set === 'enabled') {
    window.document.body.style.overflow = 'initial';
  } else if (set === 'disabled') {
    window.document.body.style.overflow = 'hidden';
  }
  return;
};

function extractQueryVariablesFromSrc(scriptSrc) {
  const separatedPathAndQueryVariables = scriptSrc.split('?');
  const queryVariables = separatedPathAndQueryVariables[1];
  const separatedQueryVariables = queryVariables?.split('&');

  const companyIdUrlVariable = separatedQueryVariables?.find(srcString => srcString.includes('companyId='));
  const languageUrlVariable = separatedQueryVariables?.find(srcString => srcString.includes('lang='));

  const companyId = companyIdUrlVariable?.split('=')[1];
  const language = languageUrlVariable?.split('=')[1];

  return { companyId, language };
}

function getCompanyIdFromSrcUrl() {
  const scriptSrc = document.getElementById('_jobnet-modal-script').src;

  if (scriptSrc.includes('?')) { // a "?" in the url indicates that query variables are present
    const { companyId } = extractQueryVariablesFromSrc(scriptSrc);
    return companyId;
  }
  return '';
}

function sortJobListingsByType(jobListings) {
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

function getTranslatedText(text, swedish, english) {
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
    case 'continuous':
      if (language === 'sv') return 'Prioriterad ansökan';
      if (language === 'en') return 'Prioritized application';
    case 'active':
      if (language === 'sv') return 'Aktiv rekrytering';
      if (language === 'en') return 'Active recruitment';
    case 'role-title':
      if (language === 'sv') return swedish.trim().length ? swedish : english;
      if (language === 'en') return english.trim().length ? english : swedish;
    default:
      return '';
  }
}

function getJobListingTypeText(type) {
  switch (type) {
    case 'DORMANT':
      return getTranslatedText('dormant');
    case 'CONTINUOUS':
      return getTranslatedText('continuous');
    case 'ACTIVE':
      return getTranslatedText('active');
    default:
      return '';
  }
}

function getJobListingTypeIcon(type) {
  switch (type) {
    case 'DORMANT':
      return 'icons/16/Time.svg';
    case 'CONTINUOUS':
      return 'icons/16/Continuous.svg';
    case 'ACTIVE':
      return 'icons/16/Binocular.svg';
    default:
      return '';
  }
}

function setStyling(element, styles) {
  const oneLineStyles = styles.replaceAll('\n', '');
  const modifiedStylesForDOM = oneLineStyles.replaceAll('  ', '')
  element.setAttribute('style', modifiedStylesForDOM);
}

function ModalHeader() {
  function CloseModalButton() {
    const closeButton = document.createElement('button');
    setStyling(closeButton, `
      background-color: transparent;
      border: none;
      cursor: pointer;
      display: flex;
      align-items: center;
    `)

    const xIcon = document.createElement('img');
    xIcon.src = "icons/24/X.svg";

    closeButton.appendChild(xIcon);
    closeButton.onclick = () => closeModal();

    return closeButton;
  }

  function ModalTitle() {
    const modalText = document.createElement('h4');
    modalText.textContent = getTranslatedText('title');
    setStyling(modalText, `
      color: #303238;
      font-size: 18px;
      line-height: 135%;
      font-weight: 700;
    `)

    return modalText;
  }

  const modalHeader = document.createElement('div');
  setStyling(modalHeader, `
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: ${isSmallScreen ? '5px' : '20px'};
    padding: ${isSmallScreen ? '0 24px' : '0 40px'};
  `)

  modalHeader.appendChild(ModalTitle());
  modalHeader.appendChild(CloseModalButton());

  return modalHeader;
}

function RoleCardsContainer() {
  const container = document.createElement('div');
  setStyling(container, `
    display: ${isSmallScreen ? 'grid' : 'flex'};
    grid-template-columns: 100%;
    flex-direction: column;
    gap: 9px;
    overflow-y: ${isSmallScreen ? 'auto' : 'scroll'};
    margin: ${isSmallScreen ? '0 24px 12px 24px' : '0 40px 40px 40px'};
    padding-right: ${!isSmallScreen && '8px'};
    max-height: ${isSmallScreen && '400px'};
  `)

  if (jobListings.length) {
    const sortedJobListings = sortJobListingsByType(jobListings);
    sortedJobListings.map((jobListing) => {
      container.appendChild(ModalRoleCard(jobListing));
    })
  } else {
    const emptyText = document.createElement('span');
    emptyText.textContent = getTranslatedText('no-jobs');
    setStyling(emptyText, `color: #586D79;`)
    container.appendChild(emptyText);
  }

  return container;
}

function ModalRoleCard(jobListing) {
  function RoleCardImage() {
    const image = document.createElement('img');
    image.src = jobListing.coverImage.accessUrl ? jobListing.coverImage.accessUrl : jobListing.company.jobListingDefaultCoverImage.accessUrl;
    setStyling(image, `
      height: 115px;
      width: 140px;
      aspect-ratio: 160 / 115;
      object-fit: cover;
      background-color: #F0F4F6;
    `);

    return image;
  }

  function RoleCardContent() {
    function RoleCardTitle() {
      const swedishRoleTitle = jobListing.titleV2.entries.find(entry => entry.iso6391Code === 'sv').text;
      const englishRoleTitle = jobListing.titleV2.entries.find(entry => entry.iso6391Code === 'en').text;

      const titleContainer = document.createElement('div');
      setStyling(titleContainer, `display: flex; width: 100%;`);

      const title = document.createElement('span');
      title.textContent = getTranslatedText('role-title', swedishRoleTitle, englishRoleTitle);
      setStyling(title, `
        color: #303238;
        font-size: 16px;
        font-weight: 400;
      `);

      titleContainer.appendChild(title);

      return titleContainer;
    }

    function RoleCardType() {
      const type = document.createElement('div');
      setStyling(type, `
        display: flex;
        align-items: center;
        margin-bottom: 8px;
      `)

      const typeText = document.createElement('span');
      typeText.textContent = getJobListingTypeText(jobListing.type);
      setStyling(typeText, `
        color: #586D79;
        font-size: 14px;
        line-height: 135%;
        font-weight: 400;
      `)

      const typeIconContainer = document.createElement('div');
      setStyling(typeIconContainer, `
        background-color: #F0F4F6;
        height: 24px;
        width: 24px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 100%;
        margin-right: 8px;
      `)

      const typeIcon = document.createElement('img');
      typeIcon.src = getJobListingTypeIcon(jobListing.type);

      typeIconContainer.appendChild(typeIcon);
      type.appendChild(typeIconContainer);
      type.appendChild(typeText);

      return type;
    }

    const content = document.createElement('a');
    content.href = `https://jobnet.se/${jobListing.urlSlug}`;
    content.target = '_blank';
    setStyling(content, `
      padding: 16px;
      flex: 1 1 0%;
      display: flex;
      flex-direction: column;
      justify-content: start;
      cursor: pointer;
      text-decoration: none
    `)

    content.appendChild(RoleCardType());
    content.appendChild(RoleCardTitle());

    return content;
  }

  const roleCard = document.createElement('div');
  setStyling(roleCard, `
    background-color: white;
    display: flex;
    margin-bottom: 3px;
    box-shadow: rgb(0 0 0 / 6%) 0px 3px 0px;
    border-radius: 12px;
    overflow: hidden;
    min-height: ${isSmallScreen ? 'unset' : '115px'}
  `)

  !isSmallScreen && roleCard.appendChild(RoleCardImage());
  roleCard.appendChild(RoleCardContent());

  return roleCard;
}
