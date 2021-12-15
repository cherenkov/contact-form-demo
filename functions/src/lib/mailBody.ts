// import { IFormInput } from '~/components/Interfece';

// type FormPayload = {
//   name: string;
//   email: string;
//   details: string;
// };
interface IFormInput {
  name: string;
  nameFurigana: string;
  organization: string;
  email: string;
  postalCode: string;
  address: string;
  tel: string;
  whichProduct: string;
  subject: string;
  details: string;
  agree: boolean;
}

export const adminMailBody = (params: IFormInput) => {
  return `
以下内容でお問い合わせを受け付けました。

//////////////////////////
お名前(姓名):
${params.name}

ふりがな(姓名):
${params.nameFurigana}

会社名:
${params.organization}

メールアドレス:
${params.email}

郵便番号:
${params.postalCode}

ご住所:
${params.address}

電話番号:
${params.tel}

どの製品について:
${params.whichProduct}

お問い合わせ件名:
${params.subject}

お問い合わせ内容:
${params.details}

個人情報の取り扱いについて:
${params.agree ? '同意する' : ''}
//////////////////////////
`;
};
export const thanksMailBody = (params: IFormInput) => {
  return `
${params.name} 様

お問い合わせありがとうございます。
以下内容でお問い合わせを受け付けました。

//////////////////////////
お名前(姓名):
${params.name}

ふりがな(姓名):
${params.nameFurigana}

会社名:
${params.organization}

メールアドレス:
${params.email}

郵便番号:
${params.postalCode}

ご住所:
${params.address}

電話番号:
${params.tel}

どの製品について:
${params.whichProduct}

お問い合わせ件名:
${params.subject}

お問い合わせ内容:
${params.details}

個人情報の取り扱いについて:
${params.agree ? '同意する' : ''}
//////////////////////////

後ほど担当者よりご連絡を差し上げます。
よろしくお願いいたします。
`;
};
