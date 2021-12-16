/// <reference types="cypress" />

context('Actions', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/');
  });

  it('必須チェックのエラーメッセージが出ること', () => {
    cy.get('button[type="submit"]').click();
    // 必須項目：
    // お名前(姓名)
    // ふりがな(姓名)
    // メールアドレス
    // お問い合わせ件名
    // お問い合わせ内容
    // 個人情報の取り扱いについて
    cy.get('input[name="name"]').parent().find('div').should('have.text', 'お名前(姓名)は必須です。');
    cy.get('input[name="nameFurigana"]').parent().find('div').should('have.text', 'ふりがな(姓名)は必須です。');
    cy.get('input[name="email"]').parent().find('div').should('have.text', 'メールアドレスは必須です。');
    cy.get('input[name="subject"]').parent().find('div').should('have.text', 'お問い合わせ件名は必須です。');
    cy.get('textarea[name="details"]').parent().find('div').should('have.text', 'お問い合わせ内容は必須です。');
    cy.get('input[name="agree"]')
      .parent()
      .parent()
      .parent()
      .find('div')
      .contains('個人情報の取り扱いについての同意は必須です。');

    //
  });

  it('メールアドレスのバリデーションエラーが出ること', () => {
    cy.get('input[name="email"]').type('xxxx');
    cy.get('button[type="submit"]').click();
    cy.get('input[name="email"]').parent().find('div').contains('正しいメールアドレスを入力してください。');

    cy.get('input[name="email"]').clear().type('xxxx@');
    cy.get('button[type="submit"]').click();
    cy.get('input[name="email"]').parent().find('div').contains('正しいメールアドレスを入力してください。');

    cy.get('input[name="email"]').clear().type('@example');
    cy.get('button[type="submit"]').click();
    cy.get('input[name="email"]').parent().find('div').contains('正しいメールアドレスを入力してください。');

    cy.get('input[name="email"]').clear().type('xxxx@example');
    cy.get('button[type="submit"]').click();
    cy.get('input[name="email"]').parent().find('div').contains('正しいメールアドレスを入力してください。');

    // 正しい場合はエラーがないこと
    cy.get('input[name="email"]').clear().type('xxxx@example.com');
    cy.get('button[type="submit"]').click();
    cy.get('input[name="email"]').parent().find('.text-error-validation').should('have.length', 0);
  });

  // 郵便番号
  // パターンルール：数字始まりであること。数字かハイフンであること。
  it('郵便番号のバリデーションエラーが出ること', () => {
    cy.get('input[name="postalCode"]').type('xxxx');
    cy.get('button[type="submit"]').click();
    cy.get('input[name="postalCode"]').parent().find('div').contains('正しい郵便番号を入力してください。');

    cy.get('input[name="postalCode"]').clear().type('-');
    cy.get('button[type="submit"]').click();
    cy.get('input[name="postalCode"]').parent().find('div').contains('正しい郵便番号を入力してください。');

    cy.get('input[name="postalCode"]').clear().type('-1234567');
    cy.get('button[type="submit"]').click();
    cy.get('input[name="postalCode"]').parent().find('div').contains('正しい郵便番号を入力してください。');

    // 正しい場合はエラーがないこと
    cy.get('input[name="postalCode"]').clear().type('123-4567');
    cy.get('button[type="submit"]').click();
    cy.get('input[name="postalCode"]').parent().find('.text-error-validation').should('have.length', 0);

    // 正しい場合はエラーがないこと
    cy.get('input[name="postalCode"]').clear().type('1234567');
    cy.get('button[type="submit"]').click();
    cy.get('input[name="postalCode"]').parent().find('.text-error-validation').should('have.length', 0);

    // 正しい場合はエラーがないこと
    cy.get('input[name="postalCode"]').clear().type('123456789');
    cy.get('button[type="submit"]').click();
    cy.get('input[name="postalCode"]').parent().find('.text-error-validation').should('have.length', 0);
  });

  // 電話番号
  // パターンルール：数字始まりであること。数字かハイフンであること。
  it('電話番号のバリデーションエラーが出ること', () => {
    cy.get('input[name="tel"]').type('xxxx');
    cy.get('button[type="submit"]').click();
    cy.get('input[name="tel"]').parent().find('div').contains('正しい電話番号を入力してください。');

    cy.get('input[name="tel"]').clear().type('-');
    cy.get('button[type="submit"]').click();
    cy.get('input[name="tel"]').parent().find('div').contains('正しい電話番号を入力してください。');

    cy.get('input[name="tel"]').clear().type('-1234567');
    cy.get('button[type="submit"]').click();
    cy.get('input[name="tel"]').parent().find('div').contains('正しい電話番号を入力してください。');

    // 正しい場合はエラーがないこと
    cy.get('input[name="tel"]').clear().type('123-4567');
    cy.get('button[type="submit"]').click();
    cy.get('input[name="tel"]').parent().find('.text-error-validation').should('have.length', 0);

    // 正しい場合はエラーがないこと
    cy.get('input[name="tel"]').clear().type('1234567');
    cy.get('button[type="submit"]').click();
    cy.get('input[name="tel"]').parent().find('.text-error-validation').should('have.length', 0);

    // 正しい場合はエラーがないこと
    cy.get('input[name="tel"]').clear().type('12345-6789');
    cy.get('button[type="submit"]').click();
    cy.get('input[name="tel"]').parent().find('.text-error-validation').should('have.length', 0);
  });

  it('必須項目を全て入力すると確認画面へ遷移すること', () => {
    cy.get('button[type="submit"]').click();
    // 必須項目：
    // お名前(姓名)
    // ふりがな(姓名)
    // メールアドレス
    // お問い合わせ件名
    // お問い合わせ内容
    // 個人情報の取り扱いについて
    cy.get('input[name="name"]').type('鈴木太郎');
    cy.get('input[name="nameFurigana"]').type('スズキタロウ');
    cy.get('input[name="email"]').type('test@example.com');
    cy.get('input[name="subject"]').type('test');
    cy.get('textarea[name="details"]').type('testtest');
    cy.get('input[name="agree"]').click();

    cy.get('button[type="submit"]').click();

    // 確認画面に遷移したかどうかはStepperのdata-currentstepの値で判定する。
    // 入力画面:0, 確認画面:1, 完了画面:2
    cy.get('.steps').should('have.data', 'currentstep', 1);

    // 戻るボタンで戻れること
    cy.get('button.btn-back').click();

    // 入力画面であるかどうかの判定は、名前の入力欄があること
    cy.get('input[name="name"]').should('have.length', 1);
  });

  it('確認画面が正しく表示されること', () => {
    cy.get('input[name="name"]').type('鈴木太郎');
    cy.get('input[name="nameFurigana"]').type('スズキタロウ');
    cy.get('input[name="organization"]').type('株式会社タロウ');
    cy.get('input[name="email"]').type('test@example.com');
    cy.get('input[name="postalCode"]').type('123-0001');
    cy.get('input[name="address"]').type('東京都世田谷区');
    cy.get('input[name="tel"]').type('03-1234-5678');
    cy.get('select[name="whichProduct"]').select('Bサービスについて');
    cy.get('input[name="subject"]').type('テストです');
    cy.get('textarea[name="details"]').type('testtest');
    cy.get('input[name="agree"]').click();

    cy.get('button[type="submit"]').click();

    // 入力した内容が確認画面に表示されていること;
    cy.contains('鈴木太郎');
    cy.contains('スズキタロウ');
    cy.contains('株式会社タロウ');
    cy.contains('test@example.com');
    cy.contains('123-0001');
    cy.contains('東京都世田谷区');
    cy.contains('03-1234-5678');
    cy.contains('Bサービスについて');
    cy.contains('テストです');
    cy.contains('testtest');
    cy.contains('同意する');
  });

  it('完了画面が表示されること', () => {
    cy.get('input[name="name"]').type('鈴木太郎');
    cy.get('input[name="nameFurigana"]').type('スズキタロウ');
    cy.get('input[name="organization"]').type('株式会社タロウ');
    cy.get('input[name="email"]').type('test@example.com');
    cy.get('input[name="postalCode"]').type('123-0001');
    cy.get('input[name="address"]').type('東京都世田谷区');
    cy.get('input[name="tel"]').type('03-1234-5678');
    cy.get('select[name="whichProduct"]').select('Bサービスについて');
    cy.get('input[name="subject"]').type('テストです');
    cy.get('textarea[name="details"]').type('testtest');
    cy.get('input[name="agree"]').click();

    cy.get('button[type="submit"]').click();

    cy.get('button.btn-send').click();
    cy.contains('送信完了');
  });
});
