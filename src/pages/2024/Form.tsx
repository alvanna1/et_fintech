import { useEffect, useState } from "react";
import * as config from "@/utils/2024/form_config";
import * as fv from "@/utils/form_validation";
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

const FintechFormSchema = Yup.object().shape({
    firstName: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    lastName: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
  });

export const Form2024 = () => {
    useEffect(() => {
        import(`@/assets/2024/css/form.css`);
    });

    const currentDate = new Date();
    const ApplcationStartDate = new Date('2024-12-01');
    const ApplcationEndDate = new Date('2025-01-10');

    if (currentDate < ApplcationStartDate) {
        return (
            <>
                <EnvironmentNotice />
                <FormHeader />
                <section className="form_content">
                    <div className="container">
                        <h1 className="width_remark">本活動將於2024年11月30日開始，敬請留意。</h1>
                        <h1 className="width_remark">Event will begin on November 30, 2024, please pay attention.</h1>
                    </div>
                </section>
            </>
        )
    } else if (currentDate >= ApplcationEndDate) {
        return (
            <>
                <EnvironmentNotice />
                <FormHeader />
                <section className="form_content">
                    <div className="container">
                    <h1 className="width_remark">此報名已經結束，感謝閣下支持！</h1>
                    <h1 className="width_remark">Closed for applications, thank you for your support!</h1>
                    </div>
                </section>
            </>
        )
    } else {
        return (
            <>
            <EnvironmentNotice />
            <FormHeader />
            <section className="form_content">
                <div className="container">
                    <FormBody />
                </div>
            </section>
        </>
        )
    }
}

const EnvironmentNotice: React.FC = () => {
    const env = import.meta.env.VITE_ENV;
    if (env === 'local' || env === 'dev' || env === 'uat') {
        return (
            <div
                style={{
                    position: "fixed",
                    top: 70,
                    left: 0,
                    height: 100,
                    width: 100,
                    backgroundColor: "red",
                    opacity: "0.5",
                    zIndex: 9999999,
                    textAlign: "center",
                    lineHeight: 100,
                    fontSize: 20,
                    color: "white",
                    textTransform: "uppercase"
                }}
            >{env}測試</div>
        )
    }

}

const FormHeader: React.FC = () => {
    return (
        <>
            <section className="heading">
                <div className="container">
                    <img className="logo" src="/2024/images/form/main_banner.png" />
                </div>
            </section>
            <section className="logoWrapper">
                <div className="container">
                    <div className="logoContainer">
                        <div>
                            <p className="groupName">
                                <b>Organiser</b>
                            </p>
                            <p className="logoImg Lg">
                                <img
                                    src="/2024/images/form/etnet.png"
                                    style={{ width: 120 }}
                                    alt="etnet經濟通"
                                    title="etnet經濟通"
                                />
                            </p>
                        </div>
                        <div>
                            <p className="groupName">
                                <b>Co-organiser and FinTech Partner</b>
                            </p>
                            <p className="logoImg Lg">
                                <img
                                    src="/2024/images/form/cyberport.png?v=1"
                                    style={{ width: 140 }}
                                    alt="Cyberport"
                                    title="Cyberport"
                                />
                            </p>
                        </div>
                        <div>
                            <p className="groupName">
                                <b>Co-organiser</b>
                            </p>
                            <p className="logoImg Lg">
                                <img
                                    src="/2024/images/form/HKSTP_Applicaion_form_logo.png"
                                    style={{ width: 175 }}
                                    alt="HKSTP"
                                    title="HKSTP"
                                />
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export const FormBody = () => (
    <div>
      <h1>Signup</h1>
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
        }}
        validationSchema={FintechFormSchema}
        onSubmit={values => {
          // same shape as initial values
          console.log(values);
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <Field name="firstName" />
            {errors.firstName && touched.firstName ? (
              <div>{errors.firstName}</div>
            ) : null}
            <Field name="lastName" />
            {errors.lastName && touched.lastName ? (
              <div>{errors.lastName}</div>
            ) : null}
            <Field name="email" type="email" />
            {errors.email && touched.email ? <div>{errors.email}</div> : null}
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );

/*
const FormBody: React.FC = () => {
    
    const groupTypeList = config.groupTypeOptions.map((option) => (
        <li className="radio"><input type="radio" className="group_type" id={'group_type_' + option.value} name="group_type" value={option.value} /><label htmlFor={'group_type_' + option.value}>{option.label}</label></li>
    ))
    
    const awardsList = config.awardsOptions.map((option) => (
        <li className="radio col_3" style={{ verticalAlign: "top" }}>
            <input type="radio" id={'award_category_' + option.value} className="award_category" name="award_category" value={option.value} />
            <label htmlFor={'award_category_' + option.value} >{option.eng}<br />{option.tc}</label>
        </li>
    ))

    interface FormData {
        group_type: string;
        company_name_chi: string;
        entry_title_chi: string;
        company_address_chi: string;
        company_name_eng: string;
        entry_title_eng: string;
        company_address_eng: string;
        contact_email_1: string;
    }
    
    const [formData, setFormData] = useState<FormData>({ 
        group_type: '',
        company_name_chi: '',
        entry_title_chi: '',
        company_address_chi: '',
        company_name_eng: '',
        entry_title_eng: '',
        company_address_eng: '',
        contact_email_1: '',
    });

    const [formErrors, setFormErrors] = useState<any>({

    });

    

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {

        e.preventDefault();

        const errors:any = {
            company_name_chi: fv.validateChinese(formData.company_name_chi),
            entry_title_chi: fv.validateChinese(formData.entry_title_chi),
            company_address_chi: fv.validateChinese(formData.company_address_chi),
            company_name_eng: fv.validateEnglish(formData.company_name_eng),
            entry_title_eng: fv.validateEnglish(formData.entry_title_eng),
            company_address_eng: fv.validateEnglish(formData.company_address_eng),
            contact_email_1: fv.validateEmail(formData.contact_email_1)
        };
        setFormErrors(errors);
        console.log(errors)

    };
    
    return (
        <form
            name="applicationform"
            id="applicationform"
            onSubmit={handleSubmit}
            method="post"
            encType="multipart/form-data"
        >
            <FormInstruction />
            <div className="container">
                <div className="part">
                    <h1 className="width_remark">
                        Part I - Entry Information 參賽作品摘要
                    </h1>
                    <div className="label">
                        Categories 參賽類別<span style={{ color: "red" }}>*</span>
                    </div>
                    <div className="box groupType">
                        <div className="inputWrap">
                            <ul>
                                {groupTypeList}
                            </ul>
                        </div>
                    </div>
                    <span className="remark">
                        *Note 備註：The below entry information will be featured in the
                        award booklet.以下參賽機構作品摘要將刊登於活動場刊。
                    </span>
                    <div>
                        <div className="box">
                            <div className="label" id="CompanyNameTitle">
                                Company Name 機構名稱
                            </div>
                        </div>
                        <div className="box col_2" id="CompanyNameEng">
                            <div className="label">
                                ENG<span style={{ color: "red" }}>*</span>
                            </div>
                            <div className="inputWrap">
                                <input
                                    type="text"
                                    className="company_name_eng"
                                    name="company_name_eng"
                                    maxLength={100}
                                />
                                <div>{formErrors.company_name_eng && <span style={{ color: 'red' }}>{formErrors.company_name_eng}</span>}</div>
                            </div>
                        </div>
                        <div className="box col_2" id="CompanyNameChi">
                            <div className="label">中</div>
                            <div className="inputWrap">
                                <input
                                    type="text"
                                    className="company_name_chi"
                                    name="company_name_chi"
                                    maxLength={100}
                                />
                            </div>
                        </div>
                    </div>
                    <div style={{ clear: "both", height: 20 }} />
                    <div className="box">
                        <div className="label">Entry Title 參賽機構作品名稱</div>
                    </div>
                    <div className="box col_2">
                        <div className="label">
                            ENG<span style={{ color: "red" }}>*</span>
                        </div>
                        <div className="inputWrap">
                            <input
                                type="text"
                                className="entry_title_eng"
                                name="entry_title_eng"
                                maxLength={200}
                            />
                        </div>
                    </div>
                    <div className="box col_2">
                        <div className="label">中</div>
                        <div className="inputWrap">
                            <input
                                type="text"
                                className="entry_title_chi"
                                name="entry_title_chi"
                                maxLength={25}
                            />
                        </div>
                    </div>
                    <div className="box">
                        <div className="label">Company Address 機構地址</div>
                    </div>
                    <div className="box col_2">
                        <div className="label">
                            ENG<span style={{ color: "red" }}>*</span>
                        </div>
                        <div className="inputWrap">
                            <input
                                type="text"
                                className="company_address_eng"
                                name="company_address_eng"
                                maxLength={200}
                            />
                        </div>
                    </div>
                    <div className="box col_2">
                        <div className="label">中</div>
                        <div className="inputWrap">
                            <input
                                type="text"
                                className="company_address_chi"
                                name="company_address_chi"
                                maxLength={50}
                            />
                        </div>
                    </div>
                    <div className="box entryIncubation">
                        <div className="label">
                            Incubation Programme 培育計劃成員
                            <span style={{ color: "red" }}>*</span>
                        </div>
                        <div className="inputWrap">
                            <div className="radio">
                                <input
                                    type="radio"
                                    id="entry_incubation_N"
                                    className="entry_incubation"
                                    name="entry_incubation"
                                    defaultValue="N"
                                />
                                <label htmlFor="entry_incubation_N">
                                    Not Applicable 不適用
                                </label>
                            </div>
                            <div className="radio">
                                <input
                                    type="radio"
                                    id="entry_incubation_cyberport"
                                    className="entry_incubation"
                                    name="entry_incubation"
                                    defaultValue="C"
                                />
                                <label htmlFor="entry_patent_cyberport">
                                    Cyberport 數碼港
                                </label>
                            </div>
                            <div className="radio">
                                <input
                                    type="radio"
                                    id="entry_incubation_hkstp"
                                    className="entry_incubation"
                                    name="entry_incubation"
                                    defaultValue="H"
                                />
                                <label htmlFor="entry_patent_hkstp">
                                    Hong Kong Science &amp; Technology Parks Corporation (HKSTP)
                                    香港科技園公司
                                </label>
                            </div>
                            <div className="radio">
                                <input
                                    type="radio"
                                    id="entry_incubation_other"
                                    className="entry_incubation"
                                    name="entry_incubation"
                                    defaultValue="O"
                                />
                                <label htmlFor="entry_patent_other">Others 其他</label>
                            </div>
                            <div
                                className="box incubationDescription"
                                style={{ display: "none" }}
                            >
                                <div className="label">
                                    Please specify 請明確說明:
                                    <span style={{ color: "red" }}>*</span>
                                </div>
                                <div className="inputWrap">
                                    <textarea
                                        placeholder=""
                                        className="entry_incubation_description"
                                        name="entry_incubation_description"
                                        defaultValue={""}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="box">
                        <div className="label" id="CompanyDescriptionTitle">
                            Company Description 公司簡介
                            <span style={{ color: "red" }}>*</span>
                        </div>
                        <div className="inputWrap">
                            <textarea
                                placeholder="Please state no more than 150 words in English and clearly written in paragraphs. 請用英文以不多於150字清楚填寫大小楷及分行:"
                                className="company_info"
                                name="company_info"
                                defaultValue={""}
                            />
                        </div>
                        <br />
                        <span className="remark" id="CompanyDescriptionRemark">
                            *Company profile will be featured in the award booklet (English)
                            without editing. 公司簡介將直接刊登於活動場刊（英文）。
                        </span>
                    </div>
                    <div className="box">
                        <div className="label">Logo 商標</div>
                        <span className="remark">
                            Please provide logo in below formats and logo guideline.
                            請提供以下商標格式及商標使用指引:
                            <br />
                            <span style={{ color: "red" }}>*</span>Logo will apply for all
                            marketing materials. Once submitted, no amendments can be made.{" "}
                            <br />
                            備註：商標將刊登於宣傳及推廣資料上,一旦提交將不得更改。
                        </span>
                        <div className="inputWrap">
                            <div className="filesWrap">
                                1. AI or EPS (color in CMYK)
                                <span style={{ color: "red" }}>*</span>
                            </div>
                            <input
                                type="hidden"
                                name="company_logo_1"
                                className="company_logo_1"
                            />
                            <input
                                type="file"
                                accept="application/postscript"
                                name="company_logo_1"
                                className="company_logo_1"
                            />
                        </div>
                        <div className="inputWrap">
                            <div className="filesWrap">
                                2. JPEG (color in CMYK)<span style={{ color: "red" }}>*</span>
                            </div>
                            <input
                                type="hidden"
                                name="company_logo_2"
                                className="company_logo_2"
                            />
                            <input
                                type="file"
                                accept="image/jpeg"
                                name="company_logo_2"
                                className="company_logo_2"
                            />
                        </div>
                        <div className="inputWrap">
                            <div className="filesWrap">
                                3. Corporate logo and brand guideline in PowerPoint / PDF
                                format (max. file size：5 MB)
                                <span style={{ color: "red" }}>*</span>
                            </div>
                            <input
                                type="hidden"
                                name="corporate_guideline"
                                className="corporate_guideline"
                            />
                            <input
                                type="file"
                                accept="application/vnd.ms-powerpoint,application/pdf"
                                name="corporate_guideline"
                                className="corporate_guideline"
                            />
                        </div>
                        <span className="remark">
                            請以簡報 / PDF提供商標使用指引。(檔案容量不多於5 MB)
                        </span>
                    </div>
                    <div style={{ clear: "both", height: 20 }} />
                </div>
            </div>
            <div className="container">
                <div className="part">
                    <h1>Part II - Contact Details 聯絡人資料</h1>
                    <div>Primary Contact Person 第一聯絡人</div>
                    <div className="box col_2">
                        <div className="label">
                            Name 姓名<span style={{ color: "red" }}>*</span>
                        </div>
                        <div className="inputWrap">
                            <input
                                type="text"
                                className="contact_name"
                                name="contact_name_1"
                                maxLength={100}
                            />
                        </div>
                    </div>
                    <div className="box col_2">
                        <div className="label">
                            Title 職位<span style={{ color: "red" }}>*</span>
                        </div>
                        <div className="inputWrap">
                            <input
                                type="text"
                                className="contact_title"
                                name="contact_title_1"
                                maxLength={100}
                            />
                        </div>
                    </div>
                    <div className="box col_2">
                        <div className="label">
                            Phone 電話<span style={{ color: "red" }}>*</span>
                        </div>
                        <div className="inputWrap">
                            <input
                                type="text"
                                className="contact_phone"
                                name="contact_phone_1"
                                maxLength={11}
                                defaultValue={852}
                            />
                        </div>
                    </div>
                    <div className="box col_2">
                        <div className="label">
                            Email 電郵<span style={{ color: "red" }}>*</span>
                        </div>
                        <div className="inputWrap">
                            <input
                                type="text"
                                className="contact_email"
                                name="contact_email_1"
                                maxLength={50}
                                value={formData.contact_email_1}
                                onChange={(e) => setFormData({ ...formData, contact_email_1: e.target.value })}
                            />
                        </div>
                        <div>{formErrors.contact_email_1 && <span style={{ color: 'red' }}>{formErrors.contact_email_1}</span>}</div>
                    </div>
                    <div>Secondary Contact Person 第二聯絡人</div>
                    <div className="box col_2">
                        <div className="label">
                            Name 姓名<span style={{ color: "red" }}>*</span>
                        </div>
                        <div className="inputWrap">
                            <input
                                type="text"
                                className="contact_name"
                                name="contact_name_2"
                                maxLength={100}
                            />
                        </div>
                    </div>
                    <div className="box col_2">
                        <div className="label">
                            Title 職位<span style={{ color: "red" }}>*</span>
                        </div>
                        <div className="inputWrap">
                            <input
                                type="text"
                                className="contact_title"
                                name="contact_title_2"
                                maxLength={100}
                            />
                        </div>
                    </div>
                    <div className="box col_2">
                        <div className="label">
                            Phone 電話<span style={{ color: "red" }}>*</span>
                        </div>
                        <div className="inputWrap">
                            <input
                                type="text"
                                className="contact_phone"
                                name="contact_phone_2"
                                maxLength={11}
                                defaultValue={852}
                            />
                        </div>
                    </div>
                    <div className="box col_2">
                        <div className="label">
                            Email 電郵<span style={{ color: "red" }}>*</span>
                        </div>
                        <div className="inputWrap">
                            <input
                                type="text"
                                className="contact_email"
                                name="contact_email_2"
                                maxLength={50}
                            />
                        </div>
                    </div>
                </div>
                <div className="part">
                    <h1 className="width_remark">
                        Part III - Award Categories 獎項類別
                        <span style={{ color: "red" }}>*</span>
                    </h1>
                    <span className="remark" data-group="corporate">
                        *Note 備註:
                        <br />
                        ONE entry is only allowed to enter ONE award stream.
                        參賽作品只可參加一個獎項類別。
                        <br />
                        The applicant is advised to submit its application(s) to the most
                        appropriate category. The Organiser reserves the rights to
                        reallocate a submission to the most appropriate category if
                        needed.
                        <br />
                        參賽機構所遞交的參賽作品應呈交至最適當的獎項類別，主辦機構保留權利更改參賽作品至更適合之獎項類別。
                    </span>
                    <div className="box awardCategory">
                        <div
                            className="label"
                            data-group="corporate"
                            style={{ display: "none" }}
                        >
                            Please mark "X" to the award stream that is to be applied.
                            請以"X" 標示參賽的獎項類別以供參考:{" "}
                            <span style={{ color: "red" }}>*</span>
                        </div>
                        <div className="inputWrap" data-group="corporate">
                            <ul>
                                {awardsList}
                            </ul>
                        </div>
                        <div
                            className="inputWrap"
                            data-group="university"
                            style={{ display: "none" }}
                        >
                            <ul>
                                <li className="radio col_2">
                                    <input
                                        type="radio"
                                        className="award_category"
                                        name="award_category"
                                        defaultValue="universities"
                                        id="award_university"
                                    />
                                    <label>
                                        FinTech Awards 2024 in University or College
                                        <br />
                                        2024金融科技大獎 - 大學或學院
                                    </label>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="part">
                    <div
                        id="StartUp"
                        className="box startUp"
                        data-group="corporate"
                    >
                        <div className="label">
                            Please mark if you are a Start-up Company.
                            <span style={{ color: "red" }}>*</span>
                        </div>
                        <div className="label">
                            請標示公司是否初創企業<span style={{ color: "red" }}>*</span>
                        </div>
                        <div className="inputWrap">
                            <ul>
                                <li className="radio">
                                    <input
                                        type="radio"
                                        id="startup_Y"
                                        className="startup"
                                        name="startup"
                                        defaultValue="Y"
                                    />
                                    <label htmlFor="startup_Y">Yes 是</label>
                                </li>
                                <li className="radio">
                                    <input
                                        type="radio"
                                        id="startup_N"
                                        className="startup"
                                        name="startup"
                                        defaultValue="N"
                                    />
                                    <label htmlFor="startup_N">No 否</label>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div
                        className="box startUp"
                        data-group="corporate"

                    >
                        <span
                            className="remark"
                            style={{
                                border: "1px solid #717171",
                                padding: 10,
                                margin: "10px 0"
                            }}
                        >
                            Remarks:  "FinTech Awards 2024 in Start-up" aims to recognise the best companies with history of less than 5 years for their excellence in potentially improve quality of life of Hong Kong citizens.
                            <br />
                            備註: 2024金融科技大獎 -「初創企業大獎」旨在表揚能有效提升香港市民生活質素的應用程式及科技，而成立不超過五年的初創企業。
                        </span>
                    </div>
                    <div
                        id="CompanyInfomation"
                        data-group="startup"
                    >
                        <div className="box col_2">
                            <div className="label" style={{ width: "100% !important" }}>
                                Business Registration Certificate No. 商業登記證號碼：{" "}
                                <span style={{ color: "red" }}>*</span>
                            </div>
                            <div className="inputWrap">
                                <input
                                    type="text"
                                    className="company_registration_no"
                                    name="company_registration_no"
                                    maxLength={20}
                                    defaultValue=""
                                />
                            </div>
                        </div>
                        <div className="box col_2">
                            <div className="label" style={{ width: "100% !important" }}>
                                Certificate of Incorporation No. 公司註冊證書號碼：
                                <span style={{ color: "red" }}>*</span>
                            </div>
                            <div className="inputWrap">
                                <input
                                    type="text"
                                    className="company_incorporation_no"
                                    name="company_incorporation_no"
                                    maxLength={20}
                                    defaultValue=""
                                />
                            </div>
                        </div>
                        <div className="box col_2">
                            <div className="label" style={{ width: "100% !important" }}>
                                Date of Incorporation 公司成立日期：
                                <span style={{ color: "red" }}>*</span>
                            </div>
                            <br />
                            <div className="inputWrap">
                                <input
                                    type="date"
                                    placeholder="yyyy-mm-dd"
                                    min="1902-01-01"
                                    max=""
                                    className="company_incorporation_date"
                                    name="company_incorporation_date"
                                    size={30}
                                    maxLength={10}
                                    defaultValue=""
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="part">
                        <h1 className="width_remark">
                            Part IV - Judging Materials 評審資料
                        </h1>
                        <span className="remark">
                            Please state special features of the application with respect to
                            the following judging criteria where appropriate.
                            <br />
                            請就以下評審準則簡述參賽作品的特性
                            <br />
                            Please fill in "not applicable" for inapplicable items:
                            如有不適用者，請填上「不適用」。
                        </span>
                        <div className="box">
                            <div className="label" id="DevelopingJudging">
                                Please elaborate the achievement of developing FinTech (Around
                                100 words):<span style={{ color: "red" }}>*</span>
                                <br />
                                公司於金融科技方面的發展及成就（大約100字）︰
                                <span style={{ color: "red" }}>*</span>
                            </div>
                            <div className="inputWrap">
                                <textarea
                                    placeholder=""
                                    className="judging_material_1"
                                    name="judging_material_1"
                                    defaultValue={""}
                                />
                            </div>
                        </div>
                        <div className="box">
                            <div className="label">
                                Judging is based on the following 5 factors (Please use around
                                100 words to elaborate each factor):
                                <br />
                                大會評審基於以下五個準則（請為每個準則以大約100字作闡述）：
                            </div>
                        </div>
                        <div className="box">
                            <div className="label">
                                Innovation and Creativity 創新與創造力 (20%)
                                <span style={{ color: "red" }}>*</span>
                            </div>
                            <div className="inputWrap">
                                <textarea
                                    placeholder=""
                                    className="judging_specialfeature_1"
                                    name="judging_specialfeature_1"
                                    defaultValue={""}
                                />
                            </div>
                        </div>
                        <div className="box">
                            <div className="label">
                                Functionality 功能性 (20%)
                                <span style={{ color: "red" }}>*</span>
                            </div>
                            <div className="inputWrap">
                                <textarea
                                    placeholder=""
                                    className="judging_specialfeature_2"
                                    name="judging_specialfeature_2"
                                    defaultValue={""}
                                />
                            </div>
                        </div>
                        <div className="box">
                            <div className="label">
                                Marketability 市場化 (20%)
                                <span style={{ color: "red" }}>*</span>
                            </div>
                            <div className="inputWrap">
                                <textarea
                                    placeholder=""
                                    className="judging_specialfeature_3"
                                    name="judging_specialfeature_3"
                                    defaultValue={""}
                                />
                            </div>
                        </div>
                        <div className="box">
                            <div className="label">
                                Benefits 優勢 (20%)<span style={{ color: "red" }}>*</span>
                            </div>
                            <div className="inputWrap">
                                <textarea
                                    placeholder=""
                                    className="judging_specialfeature_4"
                                    name="judging_specialfeature_4"
                                    defaultValue={""}
                                />
                            </div>
                        </div>
                        <div className="box">
                            <div className="label">
                                Impact 影響 (20%)<span style={{ color: "red" }}>*</span>
                            </div>
                            <div className="inputWrap">
                                <textarea
                                    placeholder=""
                                    className="judging_specialfeature_5"
                                    name="judging_specialfeature_5"
                                    defaultValue={""}
                                />
                            </div>
                        </div>
                        <div className="box">
                            <div className="label">Supplementary of entry 附加資料</div>
                            <br />
                            <br />
                            <div className="inputWrap">
                                <span>
                                    <span style={{ color: "red" }}>*</span>Supporting document
                                    not more than 5 pages in PowerPoint / PDF format (max. file
                                    size: 5 MB)<span style={{ color: "red" }}>*</span>
                                    請提供不多於五頁簡報 / PDF
                                    資料以作評審參考。(檔案容量不多於5 MB)
                                </span>
                                <span style={{ color: "red" }}>*</span>
                                <br />
                                <input
                                    type="hidden"
                                    name="judging_doc_material"
                                    className="judging_doc_material"
                                />
                                <input
                                    type="file"
                                    accept="application/vnd.ms-powerpoint, application/vnd.openxmlformats-officedocument.presentationml.presentation, application/pdf"
                                    name="judging_doc_material"
                                />
                            </div>
                            <br />
                            <br />
                            <div className="inputWrap">
                                <span>Video Link 影片鏈結</span>
                                <br />
                                <div className="inputWrap">
                                    <input
                                        type="text"
                                        className="judging_video_material_1"
                                        name="judging_video_material_1"
                                        maxLength={200}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="part">
                        <h1>Part V - Declaration 聲明</h1>
                        <div id="declaration">
                            <div className="box about_the_submission">
                                <div className="label">
                                    1. About The Submission Usage 關於資料用途
                                    <span style={{ color: "red" }}>*</span>
                                </div>
                                <div className="inputWrap">
                                    <div className="checkbox" style={{ paddingTop: 7 }}>
                                        <input
                                            type="checkbox"
                                            id="about_submission"
                                            className="about_submission"
                                            name="about_submission"
                                            defaultValue="Y"
                                        />
                                        <label htmlFor="about_submission">
                                            I/We confirm that the details are accurate and
                                            applicable in all promotion materials related to the
                                            Awards including website, booklet, trophy and print
                                            advertisement, etc. If there is any changes need to be
                                            made based on the form, I/we have only one chance to
                                            change without additional cost. If there is any
                                            additional amendment has to be made further to the
                                            signed submission usage form, HK$1,000 will be imposed
                                            each time. (For details, please refer to the Terms &amp;
                                            Conditions point #6)
                                            <br />
                                            本人/我們確認所有與獎項相關的宣傳材料包括網站、小冊子、獎座和印刷廣告等的詳細資料準確和適用。如果需要對已提交資料進行任何更改，本人/我們只接受一次無需額外費用的修改，其後將收取每次港幣
                                            1000
                                            元的修改費用。(詳情請參閲推廣活動條款及細則之第六項條款及細則)
                                        </label>
                                    </div>
                                    <br />
                                </div>
                                <div className="box about_the_application">
                                    <div className="label">
                                        2. About The Application 關於參賽機構
                                        <span style={{ color: "red" }}>*</span>
                                    </div>
                                    <div className="inputWrap">
                                        <div className="checkbox" style={{ paddingTop: 7 }}>
                                            <input
                                                type="checkbox"
                                                id="about_application"
                                                className="about_application"
                                                name="about_application"
                                                defaultValue="Y"
                                            />
                                            <label htmlFor="about_application">
                                                I / We declare that the application is submitted by
                                                locally registered entities or residents in Hong Kong.
                                                <br />
                                                本人/我們聲明參賽機構為香港註冊公司、機構或香港居民。
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="box entryPatent">
                                <div className="label">
                                    3. Please choose either one：請選擇其中一項：
                                    <span style={{ color: "red" }}>*</span>
                                </div>
                                <div className="inputWrap">
                                    <div className="radio">
                                        <input
                                            type="radio"
                                            id="entry_patent_N"
                                            className="entry_patent"
                                            name="entry_patent"
                                            defaultValue="N"
                                        />
                                        <label htmlFor="entry_patent_N">
                                            The submitting entry has not been applied for any
                                            patent. 此參賽項目沒有申請任何專利。
                                        </label>
                                    </div>
                                    <div className="radio">
                                        <input
                                            type="radio"
                                            id="entry_patent_Y"
                                            className="entry_patent"
                                            name="entry_patent"
                                            defaultValue="Y"
                                        />
                                        <label htmlFor="entry_patent_Y">
                                            Declaration on patent related information for the
                                            submitting entry：此參賽項目之專利資料列明如下：
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="box patentSection" style={{ display: "none" }}>
                                <div className="box box_4_6">
                                    <div className="label">
                                        Patent Number or Application Number (if pending)
                                        <br />
                                        專利編號或申請編號（如申請中）
                                        <span style={{ color: "red" }}>*</span>
                                    </div>
                                    <div className="inputWrap">
                                        <input
                                            type="text"
                                            className="entry_patent_number"
                                            name="entry_patent_number"
                                            maxLength={50}
                                        />
                                    </div>
                                </div>
                                <div className="box box_4_6">
                                    <div className="label">
                                        Patent Grant Title or Title
                                        <br />
                                        批予專利名稱或發明名稱
                                        <span style={{ color: "red" }}>*</span>
                                    </div>
                                    <div className="inputWrap">
                                        <input
                                            type="text"
                                            className="entry_patent_title"
                                            name="entry_patent_title"
                                            maxLength={100}
                                        />
                                    </div>
                                </div>
                                <div className="box box_4_6">
                                    <div className="label">
                                        Proprietor or Inventor
                                        <br />
                                        專利所有人或發明人<span style={{ color: "red" }}>*</span>
                                    </div>
                                    <div className="inputWrap">
                                        <input
                                            type="text"
                                            className="entry_patent_proprietor"
                                            name="entry_patent_proprietor"
                                            maxLength={100}
                                        />
                                    </div>
                                </div>
                                <div className="box box_4_6">
                                    <div className="label">
                                        Country
                                        <br />
                                        國家<span style={{ color: "red" }}>*</span>
                                    </div>
                                    <div className="inputWrap">
                                        <input
                                            type="text"
                                            className="entry_patent_country"
                                            name="entry_patent_country"
                                            maxLength={50}
                                        />
                                    </div>
                                </div>
                                <div className="box box_4_6">
                                    <div className="label">
                                        Filing Date
                                        <br />
                                        提交日期<span style={{ color: "red" }}>*</span>
                                    </div>
                                    <div className="inputWrap">
                                        <input
                                            type="date"
                                            placeholder="yyyy-mm-dd"
                                            min="1950-01-01"
                                            max="2025-01-01"
                                            className="entry_patent_date"
                                            name="entry_patent_date"
                                            size={30}
                                            maxLength={10}
                                        />
                                    </div>
                                </div>
                                <div className="box box_4_6">
                                    <div className="label">
                                        Status
                                        <br />
                                        狀況<span style={{ color: "red" }}>*</span>
                                    </div>
                                    <div className="inputWrap">
                                        <div className="radio">
                                            <input
                                                type="radio"
                                                id="entry_patent_status_approved"
                                                className="entry_patent_status"
                                                name="entry_patent_status"
                                                defaultValue="Approved"
                                            />
                                            <label htmlFor="entry_patent_status_approved">
                                                Approved 已批准
                                            </label>
                                        </div>
                                        <div className="radio">
                                            <input
                                                type="radio"
                                                id="entry_patent_status_pending"
                                                className="entry_patent_status"
                                                name="entry_patent_status"
                                                defaultValue="Pending"
                                            />
                                            <label htmlFor="entry_patent_status_pending">
                                                Pending 處理中
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="box entryDispute">
                                <div className="label">
                                    4. Please choose either one：請選擇其中一項：
                                    <span style={{ color: "red" }}>*</span>
                                </div>
                                <div className="inputWrap">
                                    <div className="radio">
                                        <input
                                            type="radio"
                                            id="entry_dispute_N"
                                            className="entry_dispute"
                                            name="entry_dispute"
                                            defaultValue="N"
                                        />
                                        <label htmlFor="entry_dispute_N">
                                            I declare that there is no dispute in any place over the
                                            world over intellectual property right about the
                                            submitting entry.
                                            <br />
                                            本人在此聲明此參賽項目在世界任何地方沒有任何知識產權爭議。
                                        </label>
                                    </div>
                                    <div className="radio">
                                        <input
                                            type="radio"
                                            id="entry_dispute_Y"
                                            className="entry_dispute"
                                            name="entry_dispute"
                                            defaultValue="Y"
                                        />
                                        <label htmlFor="entry_dispute_Y">
                                            I declare that there are / were below dispute(s) over
                                            intellectual property right about the submitting entry
                                            and I have obligation to disclose the corresponding
                                            information for the Judging Panel to consider the
                                            eligibility of the submitting entry.
                                            <br />
                                            本人在此聲明此參賽項目有或曾經有以下知識產權爭議，本人須披露有關資料予評審委員會考慮此參賽項目的參賽資格。
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="box disputeDescription"
                                style={{ display: "none" }}
                            >
                                <div className="label">
                                    Details of intellectual property right dispute(s)
                                    有關知識產權爭議的詳情:
                                    <span style={{ color: "red" }}>*</span>
                                </div>
                                <div className="inputWrap">
                                    <textarea
                                        placeholder=""
                                        className="entry_dispute_description"
                                        name="entry_dispute_description"
                                        defaultValue={""}
                                    />
                                </div>
                            </div>
                            <div className="box">
                                <span className="remark">
                                    I shall inform the organiser of above status of any
                                    dispute(s) in any place over the world over Intellectual
                                    Property rights about the submitting entry once there are
                                    any updates before the results of the awards announcement.
                                    在獎項公佈之前如此參賽項目在世界任何地方有任何知識產權爭議的更新，本人會立即將通知主辦機構。
                                </span>
                            </div>
                            <div className="box eventCost" style={{ paddingTop: 0 }}>
                                <div className="label">
                                    5. Event Administration Cost 活動行政費
                                    <span style={{ color: "red" }}>*</span>
                                </div>
                                <div className="inputWrap">
                                    <div className="checkbox" style={{ paddingTop: 7 }}>
                                        <input
                                            type="checkbox"
                                            id="event_cost"
                                            className="event_cost"
                                            name="event_cost"
                                            defaultValue="Y"
                                        />
                                        <label htmlFor="event_cost">
                                            I/We declare that we accept the event administration
                                            cost, which is HKD$10,000, if awarded under the "FinTech
                                            Awards 2024"(For details, please refer to the Terms
                                            &amp; Conditions point #7).
                                            <br />
                                            本人/我們在此聲明本人/我們明白如成功於「2024金融科技大獎」中獲獎將需支付活動行政費為港幣$10,000元正(詳情請參閲推廣活動條款及細則之第七項條款及細則)。
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="part botWrap">
                        <p>Terms &amp; Conditions 參賽條款及細則:</p>
                        <div className="textWrap">
                            <ul>
                                <li>
                                    1.
                                    參賽機構能提供充足資料予主辦機構及評審團以作評選之功用。Applicants
                                    should fill in all the required information about their
                                    company and entries, and should cover all the judging
                                    criteria.
                                </li>
                                <li>
                                    2.
                                    參賽機構遞交之所有文件及資料將不獲發還，主辦機構會將這些資料於比賽完畢後銷毀。The
                                    documents and materials supplied are not returnable and will
                                    be destroyed by the Organiser after the event.
                                </li>
                                <li>
                                    3.
                                    如因未能預計的原因，主辦機構保留取消是次比賽全部或部份項目的權利。The
                                    Organiser reserves the right to cancel any part of the
                                    Awards due to any unforeseeable circumstance.
                                </li>
                                <li>
                                    4.
                                    主辦機構保留接受或拒絕任何參賽申請的權利。如有需要，主辦機構有權修改大會評審標準。The
                                    Organiser reserves the right to accept or reject any entries
                                    and have the authority to amend any judging criteria.
                                </li>
                                <li>
                                    5.
                                    參賽單位同意保證主辦機構不須為任何形式的索償負責。此保證包括但不局限於因展出使用其全部或部份作品而引起的版權索償。Each
                                    entrant agrees to hold the Organiser harmless of any claims
                                    whatever, including but not limited to copyrights or other
                                    intellectual property claims that may be made against any of
                                    the Organiser by reason of any such presentation or other
                                    use of the entries of the entrant or any part thereof.
                                </li>
                                <li>
                                    6.由第二次起，每次修改已提交的資料，將收取額外費用(港幣$1,000元正)。收取費用與否將由主辦機構視情況決定。An
                                    additional cost (HKD$1,000) would be charged for amendment
                                    on the confirmed submission details each time from the
                                    second time onwards. The charge of amendment would be
                                    decided by the Organiser by circumstances.
                                </li>
                                <li>
                                    7.於「2024金融科技大獎」中獲獎的每個參賽項目會被收取活動行政費(港幣$10,000元正)，於任何情況下，參賽機構或團體如在比賽結果公佈當天或之後提出退出，主辦機構將不接受其活動行政費退出比賽之安排，其費用會於得獎名單公佈時必須支付。An
                                    Event Administration Cost (HKD$10,000) would be charged from
                                    each "FinTech Awards 2024" award-winning entry. In any
                                    circumstances, Organiser will not accept any exits/quits
                                    after the result has been announced. The cost will be
                                    required to be charged officially once the result
                                    announcement is made.
                                </li>
                                <li>
                                    8.
                                    活動行政費將會包括所有主辦機構的整體活動宣傳、製作活動相關的刊物及獎項之行政費用。The
                                    Event Administration Cost would include all exposures under
                                    the overall event promotion prepared by the Organiser, and
                                    the production cost of all relevant event publications and
                                    award promotions.
                                </li>
                                <li>
                                    9. 主辦機構毋須為參賽機構的損失或損毀負上任何責任。The
                                    Organiser shall not be liable in any way for any loss or
                                    damage incurred by any entrant for any cancellation of any
                                    part of the competition.
                                </li>
                                <li>
                                    10.
                                    主辦機構及評審團保留一切最終決定權。如有任何爭議，一概以主辦機構及評審團之最終決定為準。In
                                    case of any dispute, the decision of the Organiser and the
                                    Judging Panel will be final and binding on all parties
                                    concerned.
                                </li>
                                <li>
                                    11.
                                    如本中文本與英文本若有任何出入之處，一切條款概以中文本為準。All
                                    the above has been translated into English. If there is any
                                    inconsistency or ambiguity between the English version and
                                    the Chinese version, the Chinese version shall prevail.
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="part botWrap">
                        <p>Personal Information Collection Statement 個人資料收集聲明</p>
                        <div className="textWrap">
                            <p>
                                ET Net Limited ("The Organiser") will use the personal data
                                provided by you in the application form for the purposes of
                                processing your company’s application to the " FinTech Awards
                                2024" and its directly related purposes, including on-site
                                inspection, review, award selection, award ceremony and
                                publicity events. Your supply of the Personal Data to the
                                Organiser is on a voluntary basis. However, the Organiser may
                                not be able to processing your company’s application to this
                                award program unless you provide us with the Personal Data
                                required in the application form. The Organiser will keep the
                                relevant personal data in strict confidence, but the Organiser
                                may transfer such personal data to third parties if necessary
                                for the above purposes, e.g. when the Organiser feels there is
                                a need to reveal such information to facilitate the program’s
                                on-site inspection, review, award selection, award ceremony
                                and publicity events. You have the right to request access to,
                                and the correction of, your personal data in accordance with
                                the provisions of the Personal Data (Privacy) Ordinance (Cap.
                                486). Requests for access and correction should be made by
                                letter and sent to the following address:
                            </p>
                            <p>
                                Attn: Event Team
                                <br />
                                Address: ET Net Limited, Unit 1505-9 Kodak House II, 321 Java
                                Road, North Point,Hong Kong.
                            </p>
                            <p>
                                經濟通 (“主辦機構”)使用參賽者/ 團體 /
                                機構的個人資料主要用於處理「2024金融科技大獎」，以及任何直接有關的用途上。主辦機構也可能使用所提供的個人資料與參賽者/
                                團體 /
                                機構進行活動期間的有關聯絡。主辦機構亦可能將入選決賽的參賽者/
                                團體 /
                                機構的姓名、照片、比賽，以及活動過程刊登在網頁、報章、社交網站、Facebook專頁及其他媒體作為宣傳之用。參賽者/
                                團體 /
                                機構可基於自願性質向主辦機構提供個人資料，但所提供的個人資料能夠使主辦機構為參賽者/
                                團體 / 機構參加「2024金融科技大獎」的登記申請。如參賽者/ 團體
                                /
                                機構未能向主辦機構提供所需的個人資料，主辦機構可能無法處理參賽者的申請。
                            </p>
                            <strong>個人資料的轉移</strong>
                            <p>
                                為滿足上述用途之需要，主辦機構可能會將參賽者 / 團體 /
                                機構的個人資料轉移給集團內僱員、關連公司
                                (包括附屬和聯營公司)、由主辦機構就上述用途需要而聘用的印刷服務和獎座供應商、傳媒，以及參賽者
                                / 團體 / 機構。除此以外，主辦機構不會將參賽者 / 團體 /
                                機構的個人資料轉移給第三者。
                            </p>
                            <p>
                                如有需要，主辦機構或會將參賽者 / 團體 /
                                機構的姓名、照片、比賽，以及活動過程刊登在網頁、報章、Facebook專頁及其他媒體作為宣傳之用。如法例規定，主辦機構會披露有關資料，也會應執法機關的要求披露上述資料。
                            </p>
                            <p>
                                根據《個人資料(私隱)條例》(第486章)，參賽者/ 團體 /
                                機構有權向主辦機構查詢是否持有其個人資料，並有權取得該等資料的副本及更改任何不準確的資料。索取或更改資料，請以書面方式致函下列地址
                                :{" "}
                            </p>
                            <p>
                                致: 活動部
                                <br />
                                地址: 經濟通有限公司
                                香港北角渣華道三二一號柯達大廈二座一五零五至九室。
                            </p>
                        </div>
                        <div className="box datapolicy">
                            <input
                                type="checkbox"
                                id="data_policy_1"
                                name="data_policy_1"
                                defaultValue="Y"
                            />
                            <label htmlFor="data_policy_1">
                                <p>
                                    <span style={{ color: "red" }}>*</span>I have read and
                                    agreed to the Terms and Conditions, and declared that all
                                    the information provided above are verified.
                                    本人已閱讀和同意上述之推廣活動條款及細則，並聲明以上所提供的資料全均屬實。
                                </p>
                            </label>
                        </div>
                        <div className="box datapolicy">
                            <input
                                type="checkbox"
                                id="data_policy_2"
                                name="data_policy_2"
                                defaultValue="Y"
                            />
                            <label htmlFor="data_policy_2">
                                <p>
                                    <span style={{ color: "red" }}>*</span>I have read and
                                    agreed to the Personal Information Collection Statement.
                                    本人已閱讀和同意上述之收集個人資料聲明。
                                </p>
                            </label>
                        </div>
                    </div>
                    <div id="submit">
                        <div className="box col_2" width="100%">
                            <input
                                type="text"
                                id="checknum"
                                name="checknum"
                                maxLength={6}
                                autoComplete="off"
                                placeholder="驗證碼"
                            />
                        </div>
                        <span>
                            Please refresh and use new verification code to re-submit the
                            form if you have submitted application failed before.
                            <br />
                            若曾提交失敗，請於再次提交前刷新圖像並以新驗證碼重新提交其申請。
                        </span>
                        <br />
                        <br />
                        <div className="box submit-btn-wrap">
                            <input
                                type="hidden"
                                name="formaction"
                                id="formaction"
                                defaultValue="submitform"
                            />
                            <input
                                className="submit-btn"
                                type="submit"
                                name="submitbtn"
                                id="submitbtn"
                                defaultValue="Submit 遞交"
                                
                            />
                            <div className="under-layer" />
                            <div className="under-layer shadow" />
                        </div>
                        <div className="instructions">
                            Please note that applicant will receive an auto-reply email
                            after submitting the application successfully. If you don't
                            receive any reply email 3 days after your submission, please
                            contact (+852) 2880 2978 or email{" "}
                            <a href="mailto:fintechawards@etnet.com.hk">
                                fintechawards@etnet.com.hk
                            </a>{" "}
                            .<br />
                            請注意
                            如成功申請後應會收到一封自動回覆的電子郵件。如閣下在3天内未能收到，請致電
                            (+852) 2880 2978或電郵
                            <a href="mailto:fintechawards@etnet.com.hk">
                                fintechawards@etnet.com.hk
                            </a>
                            。
                        </div>
                    </div>
                </div>
            </div>
        </form>
    )
}
*/

const FormInstruction = () => {
    return (
        <>
        <div className="instructions">
                <h1 className="width_remark">Instructions 填寫說明</h1>
                <br />
                Please fill in all parts of this Form and attach additional
                information where necessary.
                <br />
                請填寫所有部分，如有需要請附加額外資訊
                <br />
                <br />
                Submission by email to <a href="mailto:fintechawards@etnet.com.hk">
                    fintechawards@etnet.com.hk
                </a>
                should be delivered on or before 10 January 2025. Late submission will
                not be accepted.

                <br />
                參賽者可於2025年1月10日 或 之前電郵此表格到
                <a href="mailto:fintechawards@etnet.com.hk">
                    fintechawards@etnet.com.hk
                </a>
                。遲交表格將不被接納。
            </div>
            <div>
                <h1 className="width_remark">Important Dates 重要日子</h1>
                <br />
                <table style={{ border: "1px solid #ccc" }} cellPadding="10">
                 <tbody>
                    <tr>
                        <td>Application Period:<br />報名階段</td>
                        <td>Now to 10 January 2025<br />現在至2025年1月10日</td>
                    </tr>
                    <tr>
                        <td>Judging Period:<br />評核階段</td>
                        <td>Mid-January 2025<br />2025年1月中旬</td>
                    </tr>
                    <tr>
                        <td>Result Announcement:<br />結果公佈</td>
                        <td>Late-January 2025<br />2025年1月下旬</td>
                    </tr>
                    <tr>
                        <td>Tentative Date for the Award Presentation Ceremony:<br />暫定頒獎典禮日期</td>
                        <td>Mid-March 2025<br />2025年3月中旬</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Form2024;