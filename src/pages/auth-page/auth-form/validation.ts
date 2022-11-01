const REQUIRED_FIELD = "Обязательно для заполнени";

export const passwordValidation = {
  require: REQUIRED_FIELD,
  validate: (value: string) => {
    if (value.length <= 6) {
      return "Пароль должен быть длинные 6-ти символов";
    }
    return true;
  },
};

export const loginValidation = {
  require: REQUIRED_FIELD,
  validate: (value: string) => {
    if (value.match(/[а-яА-Я]/)) {
      return "Логин не может содержать русские буквы";
    }

    return true;
  },
};
