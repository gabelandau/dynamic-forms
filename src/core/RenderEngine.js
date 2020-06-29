const renderOptions = {
  fieldClasses: {
    textInput: 'input',
    textArea: 'textarea',
    dropdown: 'select',
    radio: 'radio',
    checkbox: 'checkbox',
  },
};

const form = {
  name: 'Mod Questionnaire',
  data: {
    questions: [
      {
        type: 'textInput',
        display: 'Username',
        name: 'username',
        placeholder: 'Username',
      },
      {
        type: 'textInput',
        display: 'Full Name',
        name: 'full-name',
        placeholder: 'Full Name',
      },
      {
        type: 'dropdown',
        display: 'Role',
        name: 'role',
        options: [
          {
            name: 'full-mod',
            display: 'Full Mod',
          },
          {
            name: 'flair-mod',
            display: 'Flair Mod',
          },
        ],
      },
      {
        type: 'textArea',
        display: 'How do you feel about the decision?',
        name: 'decision-feelings',
        placeholder: 'Let us know please.',
      },
      {
        type: 'radio',
        display: 'Are you sure?',
        name: 'big-dumb',
        options: [
          {
            name: 'yes',
            display: 'Yes',
          },
          {
            name: 'no',
            display: 'No',
          },
        ],
      },
      {
        type: 'checkbox',
        display: 'I consent to the questions.',
        name: 'consent',
      },
    ],
  },
};

class RenderEngine {
  static renderForm() {
    let formHtml = '';
    form.data.questions.forEach((question) => {
      formHtml += this.buildQuestionString(question);
    });
    return formHtml;
  }

  static buildQuestionString(question) {
    let html = `<div class="field">${question.type !== 'checkbox' ? `<label class="label">${question.display}</label>` : ''}<div class="control">`;

    switch (question.type) {
      case 'textInput':
        html += `<input class="${renderOptions.fieldClasses.textInput}" type="text" placeholder="${question.placeholder}" name="${question.name}">`;
        break;
      case 'textArea':
        html += `<textarea class="${renderOptions.fieldClasses.textArea} placeholder="${question.placeholder}" name="${question.name}"></textarea>`;
        break;
      case 'dropdown':
        html += `<div class="${renderOptions.fieldClasses.dropdown}" name="${question.name}"><select>`;
        question.options.forEach((option) => {
          html += `<option value="${option.name}">${option.display}</option>`;
        });
        html += '</select></div>';
        break;
      case 'radio':
        question.options.forEach((option) => {
          html += `<label class="${renderOptions.fieldClasses.radio}"><input type="radio" name="${question.name}" value="${option.name}"> ${option.display}</label>`;
        });
        html += '</select></div>';
        break;
      case 'checkbox':
        html += `<label class="${renderOptions.fieldClasses.checkbox}"><input type="checkbox" value="${question.name}"> ${question.display}</label>`;
        break;
      default:
        return '';
    }

    html += '</div></div>';
    return html;
  }
}

export default RenderEngine;
