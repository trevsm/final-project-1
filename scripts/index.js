function main() {
  // only show page after all scripts are loaded
  document.addEventListener('DOMContentLoaded', function () {
    document.body.style.opacity = 1;
  });

  // This adds the header and footer to the page dynamically.
  // So there is no need to add them to each page
  const page = document.querySelector('main');
  page.innerHTML = /*html*/ `
    ${Header}
    <div class="content">
      ${page.innerHTML}
    </div>
    ${Footer}
  `;

  const nouns = [
    'optimism',
    'joy',
    'hope',
    'promise',
    'ambition',
    'confidence',
    'attention',
    'anticipation',
    'trust',
    'care',
    'creativity',
    'inspiration',
    'enthusiasm',
    'happiness',
    'curiosity',
    'motivation',
    'love',
    'innovation',
    'change',
    'adventure',
    'discovery',
  ];

  const noun = nouns[Math.floor(Math.random() * nouns.length)];
  const nounElem = document.querySelector('#noun');
  if (nounElem) nounElem.innerHTML = noun;
}

main();
