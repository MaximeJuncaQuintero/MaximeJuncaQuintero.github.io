'use client';

import Script from 'next/script';
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

// Déclaration des types pour window.gtag
declare global {
  interface Window {
    gtag: (command: string, action: any, params?: any) => void;
    dataLayer: any[];
  }
}

// Function to get page title based on pathname
const getPageTitle = (pathname: string): string => {
  if (pathname === '/') return 'Page d\'accueil';
  if (pathname.startsWith('/projects/')) {
    // Remove trailing slash for consistent matching
    const cleanPath = pathname.replace(/\/$/, '');
    switch (cleanPath) {
      case '/projects/kits':
        return 'Projet KITS';
      case '/projects/housedec':
        return 'Projet HouseDec';
      case '/projects/innovation-report':
        return 'Innovation Report';
      case '/projects/tenoris-analytics':
        return 'Projet Tenoris Analytics';
      case '/projects/amazon-kpi':
        return 'Projet Amazon KPI';
      default:
        return 'Projets';
    }
  }
  return 'Page d\'accueil';
};

const GA_MEASUREMENT_ID = 'G-0H68W3N8HC';

export default function GoogleAnalytics() {
  const pathname = usePathname();

  // Track page views
  useEffect(() => {
    if (typeof window !== 'undefined' && window.gtag) {
      const pageTitle = getPageTitle(pathname);
      
      window.gtag('event', 'page_view', {
        page_title: pageTitle,
        page_path: pathname,
        page_location: window.location.href,
        send_page_view: true
      });

      console.log('Page view tracked:', {
        page_title: pageTitle,
        page_path: pathname,
        page_location: window.location.href
      });
    }
  }, [pathname]);

  // Cette fonction configure les écouteurs d'événements pour suivre les interactions
  useEffect(() => {
    // Attendre que le DOM soit chargé et que gtag soit disponible
    const setupEventTracking = () => {
      if (typeof window !== 'undefined' && window.dataLayer) {
        console.log('Setting up PDF tracking');
        
        // Suivre les clics sur tous les liens
        const allLinks = document.querySelectorAll('a');
        console.log(`Found ${allLinks.length} links on page`);
        
        allLinks.forEach(link => {
          const href = (link as HTMLAnchorElement).href || '';
          
          // Vérifier si c'est un lien PDF
          if (href.toLowerCase().includes('.pdf')) {
            console.log('PDF link found:', href);
            
            link.addEventListener('click', (e) => {
              const target = e.currentTarget as HTMLAnchorElement;
              const url = target.href;
              console.log('PDF link clicked:', url);
              
              // Déterminer la catégorie du PDF
              let pdfCategory = 'Autre';
              if (url.includes('CV%20Maxime%20Junca') || url.includes('CV Maxime Junca')) {
                pdfCategory = 'CV';
              } else if (url.includes('HouseDec_Executive_Summary') || url.includes('HouseDec')) {
                pdfCategory = 'Projet HouseDec';
              } else if (url.includes('KITS%20-%20Executive%20Summary') || url.includes('KITS')) {
                pdfCategory = 'Projet KITS';
              } else if (url.includes('Thesis_BusinessProject') || url.includes('Thesis')) {
                pdfCategory = 'Thèse';
              } else if (url.includes('INTRA%20Report') || url.includes('INTRA Report')) {
                pdfCategory = 'Stage Amazon';
              } else if (url.includes('MVP%20Tenoris%20Analytics') || url.includes('Tenoris Analytics')) {
                pdfCategory = 'Projet Tenoris';
              } else if (url.includes('NXUTHINKTANK')) {
                pdfCategory = 'Media NXU';
              } else if (url.includes('Certificate')) {
                pdfCategory = 'Certification';
              } else if (url.includes('LoR')) {
                pdfCategory = 'Recommandation';
              }
              
              // Normaliser le nom du PDF pour éviter les doublons
              const pdfName = decodeURIComponent(url.split('/').pop() || 'PDF inconnu').replace(/%20/g, ' ');
              console.log(`PDF catégorisé: "${pdfName}" -> ${pdfCategory}`);
              
              // Envoyer les paramètres cohérents avec GTM
              window.gtag('event', 'pdf_view', {
                'pdf_name': pdfName,
                'pdf_category': pdfCategory,
                'PDF Category': pdfCategory,  // Ajout pour compatibilité avec Looker Studio
                'document_name': pdfName,  // Ajout pour compatibilité avec GTM
                'document_type': 'pdf',    // Ajout pour compatibilité avec GTM
                'event_category': 'document',
                'value': 1
              });
              
              // Journalisation complète pour déboguer
              console.log('Événement GA4 envoyé:', {
                'event_name': 'pdf_view',
                'pdf_name': pdfName,
                'pdf_category': pdfCategory,
                'PDF Category': pdfCategory,  // Ajout pour compatibilité avec Looker Studio
                'document_name': pdfName,
                'document_type': 'pdf',
                'event_category': 'document',
                'value': 1
              });
            });
          }
        });

        // Suivre les clics sur les liens de contact (LinkedIn, GitHub, Email)
        document.querySelectorAll('a[href*="linkedin.com"], a[href*="github.com"], a[href^="mailto:"]').forEach(link => {
          link.addEventListener('click', (e) => {
            const target = e.currentTarget as HTMLAnchorElement;
            const type = target.href.includes('linkedin') ? 'linkedin' : 
                        target.href.includes('github') ? 'github' : 'email';
            
            const eventData = {
              'event': 'contact_click',
              'event_category': 'contact',
              'event_label': type,
              'value': 1
            };
            window.dataLayer.push(eventData);
            console.log('Contact click event pushed:', eventData);
          });
        });

        // Suivre les clics sur le lien KITS sur Render
        document.querySelectorAll('a[href*="render.com"]').forEach(link => {
          link.addEventListener('click', (e) => {
            const target = e.currentTarget as HTMLAnchorElement;
            window.dataLayer.push({
              'event': 'kits_prototype_click',
              'event_category': 'external_link',
              'event_label': target.href,
              'value': 1
            });
          });
        });

        // Suivi des interactions avec le chatbot
        let chatMessageCount = 0;
        let chatbotState = { isOpen: false };
        
        // Observer directement le bouton du chatbot avec FaComments
        const chatButton = document.querySelector('button.rounded-full');
        if (chatButton) {
          chatButton.addEventListener('click', () => {
            // Inverser l'état à chaque clic
            chatbotState.isOpen = !chatbotState.isOpen;
            
            if (chatbotState.isOpen) {
              window.dataLayer.push({
                'event': 'chatbot_open',
                'event_category': 'chatbot',
                'event_label': 'open',
                'value': 1
              });
            }
          });
        }
        
        // Observer les nouveaux messages dans le chat
        const chatObserver = new MutationObserver((mutations) => {
          mutations.forEach((mutation) => {
            if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
              // Vérifier si c'est un message utilisateur
              const userMessageAdded = Array.from(mutation.addedNodes).some(node => {
                const element = node as HTMLElement;
                return element.classList?.contains('react-chatbot-kit-user-chat-message-container');
              });
              
              if (userMessageAdded) {
                chatMessageCount++;
                const eventData = {
                  'event': 'chatbot_message',
                  'event_category': 'chatbot',
                  'event_label': 'user_message',
                  'value': chatMessageCount
                };
                window.dataLayer.push(eventData);
                console.log('Chatbot message event pushed:', eventData);
              }
            }
          });
        });
        
        // Observer le conteneur de messages du chatbot avec un délai plus long
        const setupChatObserver = () => {
          const chatContainer = document.querySelector('.react-chatbot-kit-chat-container');
          if (chatContainer) {
            chatObserver.observe(chatContainer, { 
              childList: true, 
              subtree: true,
              attributes: true,
              characterData: true
            });
            console.log('Chat observer setup complete');
          } else {
            console.log('Chat container not found, retrying...');
            setTimeout(setupChatObserver, 1000);
          }
        };
        
        // Démarrer l'observation après un délai
        setTimeout(setupChatObserver, 3000);
      }
    };

    // Exécuter après un court délai pour s'assurer que gtag est chargé
    setTimeout(setupEventTracking, 2000);

    // Nettoyage à la déconnexion
    return () => {
      document.querySelectorAll('a[href$=".pdf"], a[href*=".pdf"], a[href*="linkedin.com"], a[href*="github.com"], a[href^="mailto:"], a[href*="render.com"]')
        .forEach(link => {
          link.removeEventListener('click', () => {});
        });
      
      const chatButton = document.querySelector('button.rounded-full');
      if (chatButton) {
        chatButton.removeEventListener('click', () => {});
      }
    };
  }, []);

  return (
    <>
      {/* Google Analytics */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}', {
            send_page_view: false, // Disable automatic page views
            cookie_flags: 'SameSite=None;Secure'
          });
        `}
      </Script>

      {/* Google Tag Manager */}
      <Script id="google-tagmanager" strategy="afterInteractive">
        {`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-TBT7CJ4Q');
        `}
      </Script>
    </>
  );
} 