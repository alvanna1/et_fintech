export const validateEmail = (email:any) => {
    const regex = /\S+@\S+\.\S+/
    if (!regex.test(email)) {
        return 'Please fill in valid email 請填寫正確電郵';
    }
    return '';
};

export const validateChinese = (value:string) => {
    const regex = /^([A-Za-z]|[\u4e00-\u9fa5]|[ ]|[0-9]|[「」]|[\/\-_.()、—&@#*!?“”]+)$/u
    if (!regex.test(value)) {
        return 'Please avoid using special characters 請避免使用特殊字符';
    }
    return '';
}

export const validateEnglish = (value:string) => {
    const regex = /^([A-Za-z]|[ ]|[0-9]|[()( ).–“”!?&#@*:（）—,&]|[\-\_\.\(\)\/\,\"\']|\(([^)]+)\))+$/
    if (!regex.test(value)) {
        return 'Please input in English 請使用英文填寫';
    }
    return '';
}

export const validateRequired = (value:string) => {
    if(value === '') return 'Please input 請填寫'
    return '';
}