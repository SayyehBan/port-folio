import * as Yup from "yup";
export const validationSchema = Yup.object({
    fullname: Yup.string()
        .required("نام و نام خانوادگی الزامی است")
        .min(3, "نام باید حداقل 3 کاراکتر باشد"),
    email: Yup.string()
        .email("ایمیل معتبر نیست")
        .required("آدرس ایمیل الزامی است"),
    subject: Yup.string()
        .required("موضوع الزامی است")
        .min(5, "موضوع باید حداقل 5 کاراکتر باشد"),
    message: Yup.string()
        .required("پیام الزامی است")
        .min(10, "پیام باید حداقل 10 کاراکتر باشد"),
    recaptcha: Yup.string().required("کپچا الزامی است"),
});