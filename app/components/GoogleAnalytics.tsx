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
      if (typeof window !== 'undefined' && window.gtag) {
        // Suivre les clics sur les liens PDF
        document.querySelectorAll('a[href$=".pdf"]').forEach(link => {
          link.addEventListener('click', (e) => {
            const target = e.currentTarget as HTMLAnchorElement;
            window.gtag('event', 'pdf_view', {
              'event_category': 'document',
              'event_label': target.href || 'PDF inconnu',
              'value': 1
            });
          });
        });

        // Suivre les clics sur les liens de contact (LinkedIn, GitHub, Email)
        document.querySelectorAll('a[href*="linkedin.com"], a[href*="github.com"], a[href^="mailto:"]').forEach(link => {
          link.addEventListener('click', (e) => {
            const target = e.currentTarget as HTMLAnchorElement;
            const type = target.href.includes('linkedin') ? 'linkedin' : 
                        target.href.includes('github') ? 'github' : 'email';
            
            window.gtag('event', 'contact_click', {
              'event_category': 'contact',
              'event_label': type,
              'value': 1
            });
          });
        });

        // Suivre les clics sur le lien KITS sur Render
        document.querySelectorAll('a[href*="render.com"]').forEach(link => {
          link.addEventListener('click', (e) => {
            const target = e.currentTarget as HTMLAnchorElement;
            window.gtag('event', 'kits_prototype_click', {
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
              // Envoyer l'événement d'ouverture
              window.gtag('event', 'chatbot_open', {
                'event_category': 'chatbot',
                'event_label': 'open',
                'value': 1
              });
              console.log('Chatbot ouvert - événement envoyé');
            } else {
              // Envoyer l'événement de fermeture
              window.gtag('event', 'chatbot_close', {
                'event_category': 'chatbot',
                'event_label': 'close',
                'value': 1
              });
              
              // Réinitialiser le compteur de messages quand on ferme le chatbot
              window.gtag('event', 'chatbot_conversation_end', {
                'event_category': 'chatbot',
                'event_label': 'conversation_ended',
                'value': chatMessageCount
              });
              chatMessageCount = 0;
            }
          });
        }
        
        // Suivi quand l'utilisateur efface le chat
        document.addEventListener('click', (e) => {
          const target = e.target as HTMLElement;
          if (target.closest('.clear-chat-button')) {
            window.gtag('event', 'chatbot_cleared', {
              'event_category': 'chatbot',
              'event_label': 'conversation_cleared',
              'value': chatMessageCount
            });
            chatMessageCount = 0;
          }
        });
        
        // Observer les nouveaux messages dans le chat
        const chatObserver = new MutationObserver((mutations) => {
          mutations.forEach((mutation) => {
            if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
              // Vérifier si un nouveau message a été ajouté
              const userMessageAdded = Array.from(mutation.addedNodes).some(node => {
                const element = node as HTMLElement;
                return element.classList?.contains('react-chatbot-kit-chat-message-container') ||
                       element.classList?.contains('react-chatbot-kit-user-chat-message');
              });
              
              if (userMessageAdded) {
                chatMessageCount++;
                window.gtag('event', 'chatbot_message', {
                  'event_category': 'chatbot',
                  'event_label': 'user_message',
                  'value': chatMessageCount
                });
              }
            }
          });
        });
        
        // Observer le conteneur de messages du chatbot
        setTimeout(() => {
          const chatContainer = document.querySelector('.react-chatbot-kit-chat-message-container');
          if (chatContainer) {
            chatObserver.observe(chatContainer, { childList: true, subtree: true });
          }
        }, 2000);
      }
    };

    // Exécuter après un court délai pour s'assurer que gtag est chargé
    setTimeout(setupEventTracking, 2000);

    // Nettoyage à la déconnexion
    return () => {
      document.querySelectorAll('a[href$=".pdf"], a[href*="linkedin.com"], a[href*="github.com"], a[href^="mailto:"], a[href*="render.com"]')
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