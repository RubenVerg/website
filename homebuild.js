console.log(`${Date.now()}|Started home`);
const fs = require('fs');

const document = (new (require('jsdom')).JSDOM(``)).window.document;

const head = fs.readFileSync('home.html').toString().split('$$$$$')[0], tail = fs.readFileSync('home.html').toString().split('$$$$$')[1];

const nav = fs.readFileSync('nav.html').toString().split(/\$/)[0] + 'active' + fs.readFileSync('nav.html').toString().split(/\$/).slice(1).join('');

// == CAROUSEL ==

// -- Reading file --
const carouselImages = fs.readFileSync('carousel.txt').toString().split(/\r?\n/).slice(1);

// -- Root DIV --
let carousel = document.createElement('div');
carousel.id = 'car';
carousel.className = 'carousel slide';
carousel.dataset.ride = 'carousel';

// -- Indicators --
let indicators = document.createElement('ol');
indicators.className = 'carousel-indicators';
carousel.appendChild(indicators);

// -- Inner DIV --
let inner = document.createElement('div');
inner.className = 'carousel-inner';
carousel.appendChild(inner);

// -- Controls --

// ~~ Previous ~~
let prev = document.createElement('a');
prev.className = 'carousel-control-prev';
prev.href = '#car';
prev.setAttribute('role', 'button');
prev.dataset.slide = 'prev';

let prevIcon = document.createElement('span');
prevIcon.className = 'carousel-control-prev-icon';
prevIcon.setAttribute('aria-hidden', 'true');
prev.appendChild(prevIcon);
carousel.appendChild(prev);

// ~~ Next ~~
let next = document.createElement('a');
next.className = 'carousel-control-next';
next.href = '#car';
next.setAttribute('role', 'button');
next.dataset.slide = 'next';

let nextIcon = document.createElement('span');
nextIcon.className = 'carousel-control-next-icon';
nextIcon.setAttribute('aria-hidden', 'true');
next.appendChild(nextIcon);
carousel.appendChild(next);

// -- For each image... --

for (let id = 0; id < carouselImages.length; id++) {
	let image = carouselImages[id];

	// ~~ Parsing ~~
	const parts = image.split(/(?<!\\),/).map(i => i.trim()).map(i => i.replace(/\\,/g, ','));
	const folder = parts[0];
	const file = parts[1];
	const title = parts[2];
	const subtitle = parts[3];
	const desc = parts[4];

	// ~~ Carousel item ~~
	let item = document.createElement('div');
	item.classList.add('carousel-item');
	if (id === 0) {
		item.classList.add('active')
	}

	// ~~ Image ~~
	let img = document.createElement('div');
	img.className = 'd-flex justify-content-center'
	let innerImg = document.createElement('img');
	innerImg.src = `/${folder}/${file}`;
	innerImg.className = 'vh-60';
	img.appendChild(innerImg)
	item.appendChild(img)

	// ~~ Caption ~~
	let caption = document.createElement('div');
	caption.className = 'carousel-caption carousel-caption-!bg! bg-dark d-none d-md-block';
	// caption.style.bottom = 0;

	// Title
	let h5 = document.createElement('h5');
	h5.textContent = title;

	// Subtitle
	let h6 = document.createElement('h6');
	h6.className = 'text-darker';
	h6.textContent = subtitle;

	// Description
	let p = document.createElement('p');
	p.className = 'text-light'
	p.textContent = desc;

	// Appending
	caption.appendChild(h5);
	if (subtitle) {
		caption.appendChild(h6);
	}
	caption.appendChild(p);

	// Button
	let button = document.createElement('a');
	button.className = 'btn btn-primary';
	button.href = `/${folder}/`;
	button.textContent = 'Vai ';

	let icon = document.createElement('i');
	icon.className = 'bi-chevron-double-right-dark';
	button.appendChild(icon);

	caption.appendChild(button);

	// ~~ Appending ~~

	item.appendChild(caption)
	inner.appendChild(item);

	// ~~ Indicator ~~

	let ind = document.createElement('li');
	ind.dataset.target = '#car';
	ind.dataset.slideTo = id.toString();
	if (id === 0) {
		ind.className = 'active';
	}

	indicators.appendChild(ind)
}

// == CARDS ==

let cardWrapper = document.createElement('div');
cardWrapper.classList.add('row', 'row-cols-1', 'row-cols-md-3');
for (let line of fs.readFileSync('cards.txt').toString().split(/\r?\n/).slice(1).map(i => i.trim())) {
	let pieces = line.split(/\t+/);
	let col = document.createElement('div');
	col.classList.add('col', 'mb-4');
	let card = document.createElement('div');
	card.classList.add('card');
	let header = document.createElement('header');
	header.classList.add('card-header');
	header.textContent = pieces[0][0].toUpperCase() + [...pieces[0]].slice(1).join('');
	card.appendChild(header);
	let img = document.createElement('img');
	img.src = pieces[0] + '/' + pieces[1];
	if (Boolean(+pieces[2])) card.appendChild(img);
	let cardBody = document.createElement('div');
	cardBody.classList.add('card-body');
	let title = document.createElement('h5');
	title.classList.add('card-title');
	title.textContent = pieces[3];
	cardBody.appendChild(title);
	let subtitle = document.createElement('h6');
	subtitle.classList.add('card-subtitle', 'mb-2', 'text-muted');
	subtitle.textContent = pieces[4];
	if (Boolean(+pieces[5])) cardBody.appendChild(subtitle);
	let text = document.createElement('p');
	text.classList.add('card-text');
	text.textContent = pieces[6];
	cardBody.appendChild(text);
	let go = document.createElement('a');
	go.href = pieces[0];
	go.classList.add('btn', 'btn-primary');
	go.textContent = `Vai `;
	let goImage = document.createElement('img');
	goImage.src = "https://files.rubenverg.com/bootstrap/icons/chevron-double-right.svg";
	go.appendChild(goImage);
	cardBody.appendChild(go)
	card.appendChild(cardBody);
	col.appendChild(card)
	cardWrapper.appendChild(col);
}

// console.log(`${Date.now()}|${cardWrapper.outerHTML}`)

const result = head + nav + tail.split(/~~~~~/)[0] + carousel.outerHTML + cardWrapper.outerHTML + tail.split(/~~~~~/)[1];

fs.writeFileSync('index.html', result);
console.log(`${Date.now()}|Home done\n\n\n`);
console.log(`${Date.now()}|Done!`);