import { validateForms } from "../functions/validate-forms";

document.addEventListener("DOMContentLoaded", () => {
  const rules1 = [
    {
      ruleSelector: ".input-name",
      rules: [
        {
          rule: "minLength",
          value: 2,
          errorMessage: "Минимальное количество символов 2",
        },
        {
          rule: "required",
          value: true,
          errorMessage: "Заполните имя!",
        },
      ],
    },
    {
      ruleSelector: ".input-tel",
      tel: true,
      telError: "Введите корректный телефон",
      rules: [
        {
          rule: "required",
          value: true,
          errorMessage: "Заполните телефон!",
        },
      ],
    },
  ];

  const afterForm = () => {
    console.log("Произошла отправка, тут можно писать любые действия");
  };

  validateForms(".hero__content .form-validate", rules1, afterForm);
  validateForms(".contacts__content .form-validate", rules1, afterForm);
});
