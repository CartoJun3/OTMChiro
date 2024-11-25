import { useEffect } from 'react';
import Script from 'next/script';

const MailchimpForm = () => {
  useEffect(() => {
    // This part ensures the Mailchimp validation script works with jQuery
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = '//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div id="mc_embed_signup">
      <form
        action="https://otmchiropractic.us11.list-manage.com/subscribe/post?u=6ebc9c4bfd5a6e27dac0a7233&amp;id=a9f6d2d2ea&amp;f_id=009d23e1f0"
        method="post"
        id="mc-embedded-subscribe-form"
        name="mc-embedded-subscribe-form"
        target="_blank"
        className="validate"
      >
        <div id="mc_embed_signup_scroll">
          <h2>Get the Ebook</h2>
          <div className="indicates-required">
            <span className="asterisk">*</span> indicates required
          </div>
          <div className="mc-field-group">
            <label htmlFor="mce-EMAIL">Email Address <span className="asterisk">*</span></label>
            <input type="email" name="EMAIL" className="required email" id="mce-EMAIL" required />
          </div>
          <div className="mc-field-group">
            <label htmlFor="mce-FNAME">First Name</label>
            <input type="text" name="FNAME" className="text" id="mce-FNAME" />
          </div>
          <div id="mce-responses" className="clear">
            <div className="response" id="mce-error-response" style={{ display: 'none' }}></div>
            <div className="response" id="mce-success-response" style={{ display: 'none' }}></div>
          </div>
          <div aria-hidden="true" style={{ position: 'absolute', left: '-5000px' }}>
            <input type="text" name="b_6ebc9c4bfd5a6e27dac0a7233_a9f6d2d2ea" tabIndex={-1} />
          </div>
          <div className="clear">
            <input type="submit" name="subscribe" id="mc-embedded-subscribe" className="button" value="Subscribe" />
          </div>
        </div>
      </form>

      {/* Script to handle form validation */}
      <Script
        id="mc-validation"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `(function($) {
              window.fnames = new Array(); 
              window.ftypes = new Array();
              fnames[0]='EMAIL';ftypes[0]='email';
              fnames[1]='FNAME';ftypes[1]='text';
              fnames[2]='LNAME';ftypes[2]='text';
              fnames[3]='ADDRESS';ftypes[3]='address';
              fnames[4]='PHONE';ftypes[4]='phone';
              fnames[5]='BIRTHDAY';ftypes[5]='birthday';
              fnames[6]='COMPANY';ftypes[6]='text';
            }(jQuery)); var $mcj = jQuery.noConflict(true);`,
        }}
      />
    </div>
  );
};

export default MailchimpForm;
