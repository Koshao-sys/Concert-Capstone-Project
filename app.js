const toggleNav = document.querySelector('.hamburger');
const nav = document.querySelector('.menu');
const closeMenu = document.querySelector('.close-menu');
const closeLinks = document.querySelectorAll('.menu a');
const screenSize = window.matchMedia('(width > 768px)');
const moreInfo = document.querySelector('.more-div');
const partnerContainer = document.querySelector('.partner-container');
const footerContainer = document.querySelector('.footer-container');

toggleNav.addEventListener('click', () => {
  nav.classList.toggle('open');
  closeMenu.style.display = nav.classList.contains('open') ? 'block' : 'none';
  toggleNav.style.display = nav.classList.contains('open') ? 'none' : 'block';
});

closeMenu.addEventListener('click', () => {
  nav.classList.remove('open');
  closeMenu.style.display = 'none';
  toggleNav.style.display = 'block';
});

closeLinks.forEach((closeLink) => {
  closeLink.addEventListener('click', (e) => {
    nav.classList.remove('open');
    closeMenu.style.display = 'none';
    screenSize.addEventListener('change', () => {
      screenSize.matches = true ? toggleNav.style.display = 'none' : toggleNav.style.display = 'block';
    });
    e.preventDefault();
    const targetId = e.target.getAttribute('href');
    const target = document.querySelector(targetId);
    target.scrollIntoView({ behavior: 'smooth' });
  });
});

const speakerObj = {
  speakerHeader: 'Featured Guests',
  canvas: './images/chess.svg',
  speakerDetails: [{
    name: 'Lionel Richie',
    bio: 'American singer, songwriter, record producer, and television personality',
    desc: 'He rose to fame in the 1970s as a songwriter and the co-lead singer of the Motown group Commodores; writing and recording the hit singles "Easy", "Sail On" and "Still", with the group before his departure',
    gif: './images/lionelrichie.jpg',
  },
  {
    name: 'Damian Marley',
    bio: 'Jamaican DJ, singer, lyricist and rapper, 4 Grammy Awards winner',
    desc: 'Damian Marley is the youngest son of reggae musician Bob Marley. He is the only child born to Marley and Cindy Breakspeare, a Jamaican jazz singer and crowned Miss World 1976',
    gif: './images/damianmarley.jpg',
  },
  {
    name: 'Sean Paul',
    bio: 'Jamaican rapper, singer and songwriter',
    desc: "Regarded as one of dancehall's most prolific artists. Paul's singles Get Busy and Temperature topped the Billboard Hot 100 chart in the United States, with Dutty Rock winning the Grammy awards.",
    gif: './images/seanpaul.jpg',
  },
  {
    name: 'Orville Richard Burell',
    bio: 'Jamaican-American rapper, Movie Actor, Business man',
    desc: 'Better known by his stage name Shaggy, is a Jamaican-American reggae rapper, singer, and songwriter who scored hits with the songs It Wasnt Me, Boombastic, In The Summertime, and Angel.',
    gif: './images/shaggy.jpg',
  },
  {
    name: 'Moses Anthony Davis',
    bio: 'Beenie Man,Jamaican Dancehall deejay, Dancehall artist',
    desc: 'Davis was born in the Waterhouse district of Kingston in 1973. Started toasting at the age of five, and was encouraged by his uncle Sydney Knowles, who played drums for Jimmy Cliff.',
    gif: './images/beenieman.jpg',
  },
  {
    name: 'James Chambers',
    bio: 'Jamaican ska, rocksteady, reggae and soul musician, multi-instrumentalist, singer, and actor',
    desc: 'He is the only living reggae musician to hold the Order of Merit, the highest honour that can be granted by the Jamaican government for achievements in the arts and sciences.',
    gif: './images/jameschambers.jpg',
  }],
};

const speakerSection = document.querySelector('.featured-speakers');

const header = document.createElement('div');
header.setAttribute('class', 'header-Container');
const headerText = document.createElement('h2');
headerText.setAttribute('class', 'header-text');
headerText.textContent = speakerObj.speakerHeader;
const headerSpan = document.createElement('span');
headerSpan.setAttribute('class', 'program-span');
header.appendChild(headerText);
header.appendChild(headerSpan);

const speakers = document.createElement('div');

for (let i = 0; i < speakerObj.speakerDetails.length; i += 1) {
  speakers.setAttribute('class', 'speakers');
  const chessBg = document.createElement('div');
  chessBg.setAttribute('class', 'chess-Bg');

  const speaker = document.createElement('div');
  speaker.setAttribute('class', 'speaker');

  const imgHolder = document.createElement('div');
  imgHolder.setAttribute('class', 'img-Holder');

  const speakerImg = document.createElement('img');
  speakerImg.setAttribute('class', 'speaker-Img');
  speakerImg.setAttribute('src', speakerObj.speakerDetails[i].gif);

  const descBox = document.createElement('div');
  descBox.setAttribute('class', 'desc-box');

  const descBoxhead = document.createElement('h2');
  descBoxhead.setAttribute('class', 'desc-Boxhead');
  descBoxhead.textContent = speakerObj.speakerDetails[i].name;

  const descBoxheadpara = document.createElement('p');
  descBoxheadpara.setAttribute('class', 'desc-Boxheadpara');
  descBoxheadpara.textContent = speakerObj.speakerDetails[i].bio;

  const descBoxspan = document.createElement('span');
  descBoxspan.setAttribute('class', 'desc-Boxspan');

  const descBoxpara = document.createElement('p');
  descBoxpara.setAttribute('class', 'desc-Boxpara');
  descBoxpara.textContent = speakerObj.speakerDetails[i].desc;

  imgHolder.appendChild(speakerImg);
  descBox.appendChild(descBoxhead);
  descBox.appendChild(descBoxheadpara);
  descBox.appendChild(descBoxspan);
  descBox.appendChild(descBoxpara);
  speaker.appendChild(imgHolder);
  speaker.appendChild(descBox);
  chessBg.appendChild(speaker);
  speakers.appendChild(chessBg);
}

speakerSection.appendChild(header);
speakerSection.appendChild(speakers);

const childElements = document.querySelectorAll('.chess-Bg');

moreInfo.addEventListener('click', () => {
  for (let x = 2; x < childElements.length; x += 1) {
    childElements[x].style.display = 'block';
  }
  moreInfo.style.display = 'none';
  partnerContainer.style.display = 'block';
  footerContainer.style.display = 'block';
});