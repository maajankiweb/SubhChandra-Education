import { Poppins, Inter } from "next/font/google";
import { Toaster } from "react-hot-toast";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-heading",
  weight: ["500", "600", "700", "800"],
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-body",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata = {
  title: "SubhChandra Education | Right course. Right career.",
  description:
    "Discover online & regular degree programs, scholarships, Bihar Student Credit Card guidance, and book expert career counselling.",
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "32x32" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/favicon.svg",
    apple: "/apple-icon.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${inter.variable} antialiased`}
      suppressHydrationWarning
    >
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="alternate icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-icon.svg" />
        {/* Prevent browser extensions (e.g. Bitdefender) from causing hydration mismatch */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var origSetAttribute = Element.prototype.setAttribute;
                  Element.prototype.setAttribute = function(name, val) {
                    if (name === 'bis_skin_checked' || name === 'bis_register') return;
                    return origSetAttribute.apply(this, arguments);
                  };
                  var clean = function(el) {
                    if (el && el.removeAttribute) {
                      el.removeAttribute('bis_skin_checked');
                      el.removeAttribute('bis_register');
                    }
                  };
                  if (typeof MutationObserver !== 'undefined' && document.documentElement) {
                    var obs = new MutationObserver(function(mutations) {
                      for (var i = 0; i < mutations.length; i++) {
                        var m = mutations[i];
                        if (m.type === 'attributes' && (m.attributeName === 'bis_skin_checked' || m.attributeName === 'bis_register')) {
                          clean(m.target);
                        } else if (m.type === 'childList') {
                          for (var j = 0; j < m.addedNodes.length; j++) {
                            var n = m.addedNodes[j];
                            if (n && n.nodeType === 1) {
                              if (n.hasAttribute && (n.hasAttribute('bis_skin_checked') || n.hasAttribute('bis_register'))) clean(n);
                              if (n.querySelectorAll) {
                                var subs = n.querySelectorAll('[bis_skin_checked], [bis_register]');
                                for (var k = 0; k < subs.length; k++) clean(subs[k]);
                              }
                            }
                          }
                        }
                      }
                    });
                    obs.observe(document.documentElement, {
                      attributes: true,
                      attributeFilter: ['bis_skin_checked', 'bis_register'],
                      childList: true,
                      subtree: true
                    });
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body
        className="min-h-screen bg-surface text-ink flex flex-col font-sans"
        suppressHydrationWarning
      >
        <Toaster position="top-right" toastOptions={{ duration: 4000 }} />
        {children}
      </body>
    </html>
  );
}
