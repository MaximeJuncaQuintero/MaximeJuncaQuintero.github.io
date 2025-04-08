'use client';

import Script from 'next/script';
import { useEffect } from 'react';

// Déclaration des types pour window.gtag
declare global {
  interface Window {
    gtag: (command: string, action: any, params?: any) => void;
    dataLayer: any[];
  }
}

export default function GoogleAnalytics() {
  // Cette fonction configure les écouteurs d'événements pour suivre les interactions
  useEffect(() => {
    // Attendre que le DOM soit chargé et que gtag soit disponible
    const setupEventTracking = () => {
      if (typeof window !== 'undefined' && window.dataLayer) {
        // Suivre les clics sur les liens PDF
        document.querySelectorAll('a[href$=".pdf"], a[href*=".pdf"]').forEach(link => {
          link.addEventListener('click', (e) => {
            const target = e.currentTarget as HTMLAnchorElement;
            const url = target.href;
            
            // Déterminer la catégorie du PDF
            let pdfCategory = 'Autre';
            if (url.includes('CV%20Maxime%20Junca')) {
              pdfCategory = 'CV';
            } else if (url.includes('HouseDec_Executive_Summary')) {
              pdfCategory = 'Projet HouseDec';
            } else if (url.includes('KITS%20-%20Executive%20Summary')) {
              pdfCategory = 'Projet KITS';
            } else if (url.includes('Thesis_BusinessProject')) {
              pdfCategory = 'Thèse';
            } else if (url.includes('INTRA%20Report')) {
              pdfCategory = 'Stage Amazon';
            } else if (url.includes('Tenoris%20Analytics')) {
              pdfCategory = 'Projet Tenoris';
            } else if (url.includes('NXUTHINKTANK')) {
              pdfCategory = 'Media NXU';
            } else if (url.includes('Certificate')) {
              pdfCategory = 'Certification';
            } else if (url.includes('LoR')) {
              pdfCategory = 'Recommandation';
            }

            const eventData = {
              'event_category': 'document',
              'custom_dimension': {
                'pdf_category': pdfCategory
              },
              'pdf_name': target.href.split('/').pop() || 'PDF inconnu',
              'value': 1
            };
            
            window.gtag('event', 'pdf_view', eventData);
            console.log('PDF view event sent:', {
              event: 'pdf_view',
              category: pdfCategory,
              ...eventData
            });
          });
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
        src="https://www.googletagmanager.com/gtag/js?id=G-0H68W3N8HC"
        strategy="beforeInteractive"
      />
      <Script id="google-analytics" strategy="beforeInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-0H68W3N8HC', {
            page_path: window.location.pathname,
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