import React, { useContext, useState } from "react";
import Modal from "react-modal";
import { Context as FormContext } from "../../context/FormContext";
import ReCaptcha from "./ReCaptcha";
import FormConcent from "../basicComponent/FormConcent";

const FORM_RENDER_DATA = [
  {
    placeholder: "名字",
    type: "text",
    name: "entry.1883788675",
    id: "contact_name",
    required: true
  },
  {
    placeholder: "信箱",
    type: "email",
    name: "entry.870224435",
    id: "contact_email",
    required: true
  },
  {
    placeholder: "電話",
    type: "phone",
    name: "entry.1333260650",
    id: "contact_phone",
    required: true
  },
  {
    placeholder: "",
    type: "select",
    name: "entry.1349143913",
    id: "sel1",
    required: true,
    options: [
      { value: "", label: "請選擇主題" },
      { value: "專案開發", label: "專案開發" },
      { value: "技術諮詢", label: "技術諮詢" },
      { value: "企業內訓", label: "企業內訓" },
      { value: "課程詢問", label: "課程詢問" },
      { value: "其它", label: "其它" }
    ]
  },
  {
    placeholder: "留下你的訊息",
    type: "textarea",
    name: "entry.469786748",
    id: "contact_message",
    required: true,
    rows: 5
  }
];

const MODAL_STYLE = {
  content: { top: "140px", bottom: "140px", right: "140px", left: "140px" }
};

const ContactsForm = () => {
  const { state } = useContext(FormContext);
  const [showModal, setShowModal] = useState(false);

  const onFormSubmit = event => {
    event.preventDefault();
    setShowModal(true);
  };

  Modal.setAppElement();
  const renderModalContect = () => {
    if (!state) {
      return null;
    }
    const inputData = Object.keys(state).map(key => {
      return { label: key, ...state[key] };
    });
    return inputData.map(({ label, value }) => {
      return (
        <div key={label} className="form-group">
          <input value={value} readOnly className="form-control input-lg" />
        </div>
      );
    });
  };
  return (
    <form className="new_contact" id="new_contact" onSubmit={onFormSubmit}>
      <FormConcent formData={FORM_RENDER_DATA} />
      <ReCaptcha />
      <input
        type="submit"
        name="commit"
        value="送出"
        className="btn btn-red btn-block"
        data-disable-with="送出"
      />
      <Modal
        isOpen={showModal}
        contentLabel="表格資料確認"
        ariaHideApp={false}
        style={MODAL_STYLE}
      >
        {renderModalContect()}
        <a href="/" className="btn btn-red btn-block">
          確定
        </a>
      </Modal>
    </form>
  );
};

export default ContactsForm;
