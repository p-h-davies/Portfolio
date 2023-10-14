import Card from '../Portfolio-card';

const EMS = {
    name: 'Equestrian Management System',
    description: 'A comprehensive business management system, customised to fit the unique needs of the Equine industry.',
    link: 'https://github.com/p-h-davies',
    repo: 'https://github.com/p-h-davies',
    img: 'src/assets/img/Text-Editor.png'
};

const TextEditor = {
    name: 'Text Editor (PWA)',
    description: 'A simple text editor, developed as a fully functional Progressive Web Application',
    link: 'https://p-h-davies-text-editor-5135231fbfde.herokuapp.com/',
    repo: 'https://github.com/p-h-davies/text-editor-pwa',
    img: 'src/assets/img/Text-Editor.png'
};

const Social = {
    name: 'Social Network API',
    description: 'A simple database for businesses to keep tracker of their employees & their relevant data',
    link: 'https://github.com/p-h-davies/social-network-api',
    repo: 'https://github.com/p-h-davies/social-network-api',
    img: 'src/assets/img/Text-Editor.png'
};

const ECOM = {
    name: 'E-Commerce Back-End Application',
    description: 'A back-end application designed to support an e-commerce website.',
    link: 'https://github.com/p-h-davies/E-Commerce-Back-End',
    repo: 'https://github.com/p-h-davies/E-Commerce-Back-End',
    img: 'src/assets/img/Text-Editor.png'
};


export default function Display() {
    return (
        <div className='portfolio-cont'>
            <div>
                <Card name={EMS.name} description={EMS.description} link={EMS.link} repo={EMS.repo} img={EMS.img} />
            </div>
            <div>
                <Card name={TextEditor.name} description={TextEditor.description} link={TextEditor.link} repo={TextEditor.repo} img={EMS.img} />
            </div>
            <div>
                <Card name={Social.name} description={Social.description} link={Social.link} repo={Social.repo} img={Social.img} />
            </div>
            <div>
                <Card name={ECOM.name} description={ECOM.description} link={ECOM.link} repo={ECOM.repo} img={ECOM.img} />
            </div>
        </div>
    );
}
