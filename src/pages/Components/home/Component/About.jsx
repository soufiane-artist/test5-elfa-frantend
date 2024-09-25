import React from 'react';
import './css/about.css'
import { Link, useNavigate } from 'react-router-dom';
import { IoIosArrowForward } from "react-icons/io";



function About() {
    const navigate = useNavigate()
  return (
    <div className="container mt-5">
                 <div className="CreatePost-header">
              <Link to={-1}>
              <h2><IoIosArrowForward /></h2>
              </Link>
                <h3>نبدة عن الموقع</h3>
                <img onClick={()=>navigate('/')} id='imglogo' src="http://res.cloudinary.com/dvivzto6g/image/upload/v1726327800/ikzcmqayqhrjgpxluw6v.png" alt="" />
            </div>
      <div className="row">
        <div className="col-lg-8 mx-auto text-center">
          <h1 className="display-4 mb-4">مرحباً بك في منصة ELFANANE.COM</h1>
          <p className="lead">
            <strong>ELFANANE.COM</strong> هي منصة عربية مميزة من المغرب، مخصصة لدعم الفنانين وتمكينهم من عرض وبيع أعمالهم الفنية بسهولة. توفر المنصة مساحة متكاملة للتواصل بين الفنانين وعشاق الفن، مما يسهل عمليات البيع والشراء ويعزز التفاعل.
          </p>
        </div>
      </div>

      <div className="row mt-5">
        <div className="col-lg-8 mx-auto">
          <h2 className="text-center mb-4">لماذا تختار ELFANANE.COM؟</h2>
          <p>
            تقدم منصة <strong>ELFANANE.COM</strong> للفنانين فرصة مميزة للترويج لأعمالهم الفنية والوصول إلى جمهور أوسع داخل المغرب وخارجه. نحن نوفر الأدوات اللازمة لتسويق الأعمال وتطوير المهارات الفنية عبر الدورات التعليمية المتنوعة.
          </p>
        </div>
      </div>

      <div className="row mt-5">
        <div className="col-lg-10 mx-auto">
          <h2 className="text-center mb-4">ميزات منصة ELFANANE.COM</h2>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <strong>عرض اللوحات الفنية:</strong> تمكين الفنانين من عرض أعمالهم الفنية وبيعها بشكل مباشر عبر المنصة.
            </li>
            <li className="list-group-item">
              <strong>دورات تعليمية متخصصة:</strong> دورات تعليمية متاحة للفنانين لتطوير مهاراتهم الفنية.
            </li>
            <li className="list-group-item">
              <strong>إعلانات مخصصة:</strong> إمكانية إنشاء إعلانات تسويقية للوحات وجذب المزيد من العملاء.
            </li>
            <li className="list-group-item">
              <strong>التواصل المباشر:</strong> تسهيل عملية التواصل بين الفنانين والمشترين دون وسطاء.
            </li>
            <li className="list-group-item">
              <strong>دعم فني متكامل:</strong> فريق دعم متاح للإجابة عن استفساراتك وحل المشكلات.
            </li>
            <li className="list-group-item">
              <strong>إدارة الحسابات الشخصية:</strong> تحديث وتعديل حسابك بما يتناسب مع أعمالك وجمهورك.
            </li>
          </ul>
        </div>
      </div>

      <div className="row mt-5">
        <div className="col-lg-8 mx-auto">
          <h2 className="text-center mb-4">كيف تعمل منصة ELFANANE.COM؟</h2>
          <p>
            بعد التسجيل في <strong>ELFANANE.COM</strong>، يمكنك تحميل صور لأعمالك الفنية مع إضافة أوصاف دقيقة وأسعار مناسبة. العملاء المهتمون سيتواصلون معك مباشرة لإتمام عملية الشراء. يمكنك أيضاً متابعة دوراتنا التعليمية لتحسين مهاراتك الفنية.
          </p>
        </div>
      </div>

      <div className="row mt-5 mb-5">
        <div className="col-lg-8 mx-auto text-center">
          <h2 className="mb-4">انضم إلى مجتمع الفنانين الآن!</h2>
          <p>
            سواء كنت فنانًا مبتدئًا أو محترفًا، فإن <strong>ELFANANE.COM</strong> هي منصتك المثالية للتواصل مع جمهور واسع، بيع أعمالك، وتعلم تقنيات جديدة. استمتع بتجربة فريدة واستثمر في موهبتك.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
