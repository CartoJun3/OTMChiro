import privacyPolicy from '@/data/privacyPolicy.json';
import {PageIntro} from '@/components/PageIntro';
import ContactSection2 from '@/components/ContactSection2';

export default function Privacy() {
  return (
    <>
      <PageIntro eyebrow="" title="Privacy Policy">
        <div className="prose max-w-none">
          <p>
            <strong>Effective Date:</strong> {privacyPolicy.effectiveDate}
          </p>
          {privacyPolicy.sections.map((section, index) => (
            <div key={index} className="mt-8">
              <hr className="my-4" />
              <h3 className="text-xl font-semibold">{section.title}</h3>
              {/* Render content with HTML */}
              <p
                className="mt-2"
                dangerouslySetInnerHTML={{ __html: section.content }}
              />
              {section.listItems && (
                <ul className="list-disc ml-6 mt-2">
                  {section.listItems.map((item, idx) => (
                    <li key={idx} dangerouslySetInnerHTML={{ __html: item }} />
                  ))}
                </ul>
              )}
              {/* Render additional content if available */}
              {section.additionalContent && (
                <p
                  className="mt-4"
                  dangerouslySetInnerHTML={{ __html: section.additionalContent }}
                />
              )}
            </div>
          ))}
        </div>
      </PageIntro>
      <ContactSection2 />
    </>
  );
}
