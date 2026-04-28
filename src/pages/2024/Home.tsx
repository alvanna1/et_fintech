import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import KeyVisual from '@/components/2024/KeyVisual';
import LeadIn from '@/components/2024/LeadIn';
import Awards from '@/components/2024/Awards';
import Judges from '@/components/2024/Judges';
import Winners from '@/components/2024/Winners';
import Highlights from '@/components/2024/Highlights';
import Exposures from '@/components/2024/Exposures';

function smoothScrollToSection(targetId: string) {
  let targetSection;
  console.log("Scrolling to:", targetId, "Found:", !!targetSection);
  switch (targetId) {
    case 'Awards':
    case '獎項類別':
      targetSection = document.getElementById('Category_Wrapper');
      break;
    case 'Judges':
    case '評審':
      targetSection = document.getElementById('Judges_Wrapper');
      break;
    case 'Winners':
    case '得獎名單':
      targetSection = document.getElementById('WinnerWrapper');
      break;
    case 'Highlights':
    case '花絮':
      targetSection = document.getElementById('Highlight_Wrapper');
      break;
    case 'Exposures':
    case '報導':
      targetSection = document.getElementById('Publication_Container');
      break;
    case 'Past Events':
    case '回顧':
      targetSection = document.getElementById('FooterEndLogo');
      break;
    default:
      return false;
  }

  if (targetSection) {
    const headerHeight = 0;
    const targetPosition =
      targetSection.getBoundingClientRect().top + window.pageYOffset - headerHeight;

    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth',
    });
    return true;
  }

  return false;
}

function addNavClickHandlers(selector: string) {
  const links = document.querySelectorAll(selector);
  links.forEach((link) => {
    link.addEventListener('click', function (this: HTMLElement, e: Event) {
      const targetId = this.textContent?.trim();
      if (targetId && smoothScrollToSection(targetId)) {
        e.preventDefault();
      }
    });
  });
}

export const Home = () => {
  const { t } = useTranslation('2024');
  const [showNewsAlert, setShowNewsAlert] = useState(false);
  const [hideNewsAlert, setHideNewsAlert] = useState(false);

  const closeNewsAlert = () => {
    setHideNewsAlert(true);
    setTimeout(() => {
      setShowNewsAlert(false);
      setHideNewsAlert(false);
    }, 500);
  };

  const viewWinners = () => {
    smoothScrollToSection('得獎名單');
    closeNewsAlert();
  };

  useEffect(() => {
    // Scroll to winners if hash is set
    if (window.location.hash === '#winners') {
      setTimeout(() => {
        smoothScrollToSection('得獎名單');
      }, 100);
    } else {
      setShowNewsAlert(true);
    }

    // Add nav click handlers
    addNavClickHandlers('#NavWrapper nav a:not(.Disabled):not([href^="http"])');
    addNavClickHandlers('.FooterMenuWrapper a:not(.Disabled):not([href^="http"])');

    const onHashChange = () => {
      if (window.location.hash === '#winners') {
        smoothScrollToSection('得獎名單');
      }
    };

    window.addEventListener('hashchange', onHashChange);

    return () => {
      window.removeEventListener('hashchange', onHashChange);
    };
  }, []);

  return (
    <>
      <KeyVisual />
      <LeadIn />
      <div id="Opening_Wrapper">
        <video controls autoPlay muted loop>
          <source src="/2024/images/opening.mp4" type="video/mp4" />
        </video>
      </div>
      <Highlights />
      <Exposures />
      <Awards />
      <Judges />
      <Winners />

      <div
        id="newsAlert"
        className={showNewsAlert ? "show" : ""}
        style={hideNewsAlert ? { animation: 'slideDown 0.5s ease-out forwards' } : undefined}
      >
        <p>{t('announcement.title')}</p>
          <button className="newsactions" onClick={viewWinners}>
            {t('announcement.result')}
          </button>
          <button className="newslater" onClick={closeNewsAlert}>
            {t('announcement.later')}
          </button>

      </div> 
    </>
  );
};

export default Home;