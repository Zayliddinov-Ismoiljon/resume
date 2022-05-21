import myPic from "../../Assets/Images/myimg.jpg";
import "./resumeadress.css";



const ResumeAdress =()=>{
    return(
        <div className='resume__adress'>
            <div className='resume__personal'>
                <img className="resume__personalimg" src={myPic} alt="my image" />
                <h2 className="resume__personaltitle">Shaxsiy Ma'lumotlar</h2>
            </div>
            <ul className="resume__list">
                <li className="resume__item">
                    <a href="mailto:zayliddinovismoiljon@gmail.com" target="_blank">
                        zayliddinovismoiljon@gmail.com
                    </a>
                </li>
                <li className="resume__item">
                    <a href="tel:+998903707724">+998903707724</a>
                </li>
                <li className="resume__item">Namangan Viloyati Chust tumani</li>
                <li className="resume__item">November 4th 2001</li>
                <li className="resume__item">
                    <a href="https://www.google.com.br/maps/place/Yorqishloq/@41.0353327,71.2178895,14z/" target="_blank">Uy manzil</a>
                </li>
                <li className="resume__item">
                    <a href="https://telegram.me/Zayliddinov_Ismoiljon" target="_blank">Telegram profile</a>
                </li>
                <li className="resume__item">
                    <a href="https://github.com/Zayliddinov-Ismoiljon" target="_blank">Git Hub profile</a>
                </li>
                <li className="resume__item">
                    <a href="https://www.linkedin.com/feed/" target="_blank">Linkedin profile</a>
                </li>
            </ul>
            <div className="resume__quality">
                <h3 className="resume__qualitytitle">Fazilatlar</h3>
                <ul className="resume__qualitylist">
                    <li className="resume__qualityitem">Tirishqoqlik</li>
                    <li className="resume__qualityitem">Xushmuomalalik</li>
                    <li className="resume__qualityitem">Intiluvchanlik</li>
                    <li className="resume__qualityitem">Mustaqil fikrlay olish</li>
                </ul>
            </div>
        </div>
    )
}
export default ResumeAdress;