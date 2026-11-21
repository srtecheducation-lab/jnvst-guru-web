const languageSelect = document.getElementById('lang');
const menuButton = document.getElementById('menu');
const navigation = document.getElementById('nav');
const pageDescription = document.querySelector('meta[name="description"]');
const socialTitle = document.querySelector('meta[property="og:title"]');
const socialDescription = document.querySelector('meta[property="og:description"]');
const socialImageAlt = document.querySelector('meta[property="og:image:alt"]');
const twitterTitle = document.querySelector('meta[name="twitter:title"]');
const twitterDescription = document.querySelector('meta[name="twitter:description"]');
const twitterImageAlt = document.querySelector('meta[name="twitter:image:alt"]');

const pageCopy = {
  en: {
    title: 'JNVST GURU — JNVST Class 6 Preparation',
    description: 'Prepare for JNVST Class 6 with free Mental Ability, Arithmetic and language passage practice in English and Bengali.',
    socialTitle: 'JNVST GURU — JNVST Class 6 Preparation',
    socialDescription: 'Free JNVST Class 6 practice for Mental Ability, Arithmetic and language passages in English and Bengali.',
    socialImageAlt: 'JNVST GURU app showing subject-wise practice options',
    twitterTitle: 'JNVST GURU — JNVST Class 6 Preparation',
    twitterDescription: 'Free JNVST Class 6 practice in English and Bengali.',
    twitterImageAlt: 'JNVST GURU app showing subject-wise practice options',
    languageLabel: 'Select language',
    menuOpen: 'Open navigation',
    menuClose: 'Close navigation'
  },
  bn: {
    title: 'JNVST GURU — JNVST ষষ্ঠ শ্রেণির প্রস্তুতি',
    description: 'বাংলা ও ইংরেজিতে মানসিক দক্ষতা, পাটিগণিত ও ভাষার অনুচ্ছেদ অনুশীলনের মাধ্যমে JNVST ষষ্ঠ শ্রেণির প্রস্তুতি নিন।',
    socialTitle: 'JNVST GURU — JNVST ষষ্ঠ শ্রেণির প্রস্তুতি',
    socialDescription: 'বাংলা ও ইংরেজিতে মানসিক দক্ষতা, পাটিগণিত ও ভাষার অনুচ্ছেদের বিনামূল্যের অনুশীলন।',
    socialImageAlt: 'JNVST GURU অ্যাপে বিষয়ভিত্তিক অনুশীলনের পর্দা',
    twitterTitle: 'JNVST GURU — JNVST ষষ্ঠ শ্রেণির প্রস্তুতি',
    twitterDescription: 'বাংলা ও ইংরেজিতে JNVST ষষ্ঠ শ্রেণির প্রস্তুতির বিনামূল্যের অনুশীলন।',
    twitterImageAlt: 'JNVST GURU অ্যাপে বিষয়ভিত্তিক অনুশীলনের পর্দা',
    languageLabel: 'ভাষা বেছে নিন',
    menuOpen: 'নেভিগেশন খুলুন',
    menuClose: 'নেভিগেশন বন্ধ করুন'
  }
};

function setLanguage(language) {
  const copy = pageCopy[language];
  if (!copy) return;

  document.documentElement.lang = language;
  document.body.classList.toggle('bn', language === 'bn');
  document.querySelectorAll('[data-en][data-bn]').forEach((element) => {
    element.innerHTML = element.dataset[language];
  });
  document.querySelectorAll('[data-alt-en][data-alt-bn]').forEach((element) => {
    element.alt = element.dataset[`alt${language === 'en' ? 'En' : 'Bn'}`];
  });
  document.querySelectorAll('[data-aria-en][data-aria-bn]').forEach((element) => {
    element.setAttribute('aria-label', element.dataset[`aria${language === 'en' ? 'En' : 'Bn'}`]);
  });
  document.title = copy.title;
  pageDescription.content = copy.description;
  socialTitle.content = copy.socialTitle;
  socialDescription.content = copy.socialDescription;
  socialImageAlt.content = copy.socialImageAlt;
  twitterTitle.content = copy.twitterTitle;
  twitterDescription.content = copy.twitterDescription;
  twitterImageAlt.content = copy.twitterImageAlt;
  languageSelect.value = language;
  languageSelect.setAttribute('aria-label', copy.languageLabel);
  menuButton.setAttribute('aria-label', navigation.classList.contains('open') ? copy.menuClose : copy.menuOpen);

  try {
    localStorage.setItem('jnvst-guru-lang', language);
  } catch (error) {
    // Language selection still works for the current page if storage is unavailable.
  }
}

function closeNavigation() {
  navigation.classList.remove('open');
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.setAttribute('aria-label', pageCopy[languageSelect.value].menuOpen);
}

let language = 'en';
try {
  language = localStorage.getItem('jnvst-guru-lang') === 'bn' ? 'bn' : 'en';
} catch (error) {
  language = 'en';
}
setLanguage(language);

languageSelect.addEventListener('change', () => {
  language = languageSelect.value;
  setLanguage(language);
});

menuButton.addEventListener('click', () => {
  const isOpen = navigation.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(isOpen));
  menuButton.setAttribute('aria-label', isOpen ? pageCopy[language].menuClose : pageCopy[language].menuOpen);
});

navigation.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', closeNavigation);
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && navigation.classList.contains('open')) {
    closeNavigation();
    menuButton.focus();
  }
});

document.getElementById('year').textContent = new Date().getFullYear();
