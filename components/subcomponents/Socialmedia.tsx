import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelopeOpenText, faLocationDot, faPhoneVolume } from '@fortawesome/free-solid-svg-icons';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons/faLinkedinIn';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons/faFacebookF';
import { faInstagram } from '@fortawesome/free-brands-svg-icons/faInstagram';
import { faTwitter } from '@fortawesome/free-brands-svg-icons/faTwitter';

export default function Socialmedia() {
    return (
        <section className='hidden bg-BlueC py-2 lg:block'>
            <div className='maxW text-sm flex justify-between items-center'>

                <article className='flex gap-6'>
                    <p className='flex items-center gap-2 text-BrownC'><FontAwesomeIcon icon={faPhoneVolume} />1234-1234</p>
                    <p className='flex items-center gap-2 text-BrownC border-BrownC'><FontAwesomeIcon icon={faEnvelopeOpenText} />seu@email.com</p>
                    <p className='flex items-center gap-2 text-BrownC  border-BrownC'><FontAwesomeIcon icon={faLocationDot} />Rua Torrinha, 245 - Torrinha, SP</p>
                </article>

                <article className='flex items-center space-x-4 text-BrownC'>
                    <a href="#" className="hover:text-white"><FontAwesomeIcon icon={faFacebookF} /></a>
                    <span className="border-l h-5 border-BrownC"></span>

                    <a href="#" className="hover:text-white"><FontAwesomeIcon icon={faTwitter} /></a>
                    <span className="border-l h-5 border-BrownC"></span>

                    <a href="#" className="hover:text-white"><FontAwesomeIcon icon={faInstagram} /></a>
                    <span className="border-l h-5 border-BrownC"></span>

                    <a href="#" className="hover:text-white"><FontAwesomeIcon icon={faLinkedinIn} /></a>
                </article>
            </div>
        </section>
    );
}
