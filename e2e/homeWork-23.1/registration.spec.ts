import test, { expect } from '@playwright/test';
import { HomePage } from '../page-object/pages/HomePage';
import { RegistrationFormGroup } from '../page-object/forms/RegistrationFormGroup';
import { errors } from '../helpers/errors';
import { testUserData } from '../helpers/testUserData';

test.describe('Registration', () => {
  test.beforeEach(async ({ page }) => {
    const HomePageInstance = new HomePage(page);
    await HomePageInstance.openPage();
    await HomePageInstance.openRegistrationFormGroup();
  });

  test.describe('trigger errors on input "Name" field in registration form group', () => {
    test('trigger empty field error and verify border color value', async ({
      page,
    }) => {
      const RegistrationFormGroupInstance = new RegistrationFormGroup(page);

      await RegistrationFormGroupInstance.triggerFieldError(
        RegistrationFormGroupInstance.getInputNameField
      );

      await RegistrationFormGroupInstance.verifyBorderColorValue(
        RegistrationFormGroupInstance.getInputNameField
      );
    });

    test('trigger empty field error and verify text error value', async ({
      page,
    }) => {
      const RegistrationFormGroupInstance = new RegistrationFormGroup(page);

      await RegistrationFormGroupInstance.triggerFieldError(
        RegistrationFormGroupInstance.getInputNameField
      );

      await RegistrationFormGroupInstance.verifyTextErrorValue(
        errors.emptyFieldRequiredErrors.name
      );
    });

    test('trigger and verify wrong data error', async ({ page }) => {
      const RegistrationFormGroupInstance = new RegistrationFormGroup(page);

      await RegistrationFormGroupInstance.triggerFieldError(
        RegistrationFormGroupInstance.getInputNameField
      );

      await RegistrationFormGroupInstance.fillInputField(
        RegistrationFormGroupInstance.getInputNameField,
        testUserData.incorrect.name
      );

      await RegistrationFormGroupInstance.verifyTextErrorValue(
        errors.wrongDataErrors.name
      );
    });

    test('trigger and verify wrong length error', async ({ page }) => {
      const RegistrationFormGroupInstance = new RegistrationFormGroup(page);

      await RegistrationFormGroupInstance.triggerFieldError(
        RegistrationFormGroupInstance.getInputNameField
      );

      await RegistrationFormGroupInstance.fillInputField(
        RegistrationFormGroupInstance.getInputNameField,
        testUserData.incorrect.name
      );

      await RegistrationFormGroupInstance.verifyTextErrorValue(
        errors.wrongLengthErrors.name
      );
    });
  });

  test.describe('trigger errors on input "Last name" field in registration form group', async () => {
    test('trigger empty field error and verify border color value', async ({
      page,
    }) => {
      const RegistrationFormGroupInstance = new RegistrationFormGroup(page);

      await RegistrationFormGroupInstance.triggerFieldError(
        RegistrationFormGroupInstance.getInputLastNameField
      );

      await RegistrationFormGroupInstance.verifyBorderColorValue(
        RegistrationFormGroupInstance.getInputLastNameField
      );
    });
    test('trigger empty field error and verify text error value', async ({
      page,
    }) => {
      const RegistrationFormGroupInstance = new RegistrationFormGroup(page);

      await RegistrationFormGroupInstance.triggerFieldError(
        RegistrationFormGroupInstance.getInputLastNameField
      );

      await RegistrationFormGroupInstance.verifyTextErrorValue(
        errors.emptyFieldRequiredErrors.lastName
      );
    });
    test('trigger and verify wrong data error', async ({ page }) => {
      const RegistrationFormGroupInstance = new RegistrationFormGroup(page);

      await RegistrationFormGroupInstance.triggerFieldError(
        RegistrationFormGroupInstance.getInputLastNameField
      );

      await RegistrationFormGroupInstance.fillInputField(
        RegistrationFormGroupInstance.getInputLastNameField,
        testUserData.incorrect.lastName
      );

      await RegistrationFormGroupInstance.verifyTextErrorValue(
        errors.wrongDataErrors.lastName
      );
    });
    test('trigger and verify wrong length error', async ({ page }) => {
      const RegistrationFormGroupInstance = new RegistrationFormGroup(page);

      await RegistrationFormGroupInstance.triggerFieldError(
        RegistrationFormGroupInstance.getInputLastNameField
      );

      await RegistrationFormGroupInstance.fillInputField(
        RegistrationFormGroupInstance.getInputLastNameField,
        testUserData.incorrect.lastName
      );

      await RegistrationFormGroupInstance.verifyTextErrorValue(
        errors.wrongLengthErrors.lastName
      );
    });
  });

  test.describe('trigger errors on input "Email" field in registration form group', async () => {
    test('trigger empty field error and verify border color value', async ({
      page,
    }) => {
      const RegistrationFormGroupInstance = new RegistrationFormGroup(page);

      await RegistrationFormGroupInstance.triggerFieldError(
        RegistrationFormGroupInstance.getInputEmailField
      );

      await RegistrationFormGroupInstance.verifyBorderColorValue(
        RegistrationFormGroupInstance.getInputEmailField
      );
    });

    test('trigger empty field error and verify text error value', async ({
      page,
    }) => {
      const RegistrationFormGroupInstance = new RegistrationFormGroup(page);

      await RegistrationFormGroupInstance.triggerFieldError(
        RegistrationFormGroupInstance.getInputEmailField
      );

      await RegistrationFormGroupInstance.verifyTextErrorValue(
        errors.emptyFieldRequiredErrors.email
      );
    });

    test('trigger and verify wrong data error', async ({ page }) => {
      const RegistrationFormGroupInstance = new RegistrationFormGroup(page);

      await RegistrationFormGroupInstance.triggerFieldError(
        RegistrationFormGroupInstance.getInputEmailField
      );

      await RegistrationFormGroupInstance.fillInputField(
        RegistrationFormGroupInstance.getInputEmailField,
        testUserData.incorrect.email
      );

      await RegistrationFormGroupInstance.verifyTextErrorValue(
        errors.wrongDataErrors.email
      );
    });
  });

  test.describe('trigger errors on input "Password" field in registration form group', async () => {
    test('trigger empty field error and verify border color value', async ({
      page,
    }) => {
      const RegistrationFormGroupInstance = new RegistrationFormGroup(page);

      await RegistrationFormGroupInstance.triggerFieldError(
        RegistrationFormGroupInstance.getInputPasswordField
      );

      await RegistrationFormGroupInstance.verifyBorderColorValue(
        RegistrationFormGroupInstance.getInputPasswordField
      );
    });

    test('trigger empty field error and verify text error value', async ({
      page,
    }) => {
      const RegistrationFormGroupInstance = new RegistrationFormGroup(page);

      await RegistrationFormGroupInstance.triggerFieldError(
        RegistrationFormGroupInstance.getInputPasswordField
      );

      await RegistrationFormGroupInstance.verifyTextErrorValue(
        errors.emptyFieldRequiredErrors.password
      );
    });

    test('trigger and verify wrong data error', async ({ page }) => {
      const RegistrationFormGroupInstance = new RegistrationFormGroup(page);

      await RegistrationFormGroupInstance.triggerFieldError(
        RegistrationFormGroupInstance.getInputPasswordField
      );

      await RegistrationFormGroupInstance.fillInputField(
        RegistrationFormGroupInstance.getInputPasswordField,
        testUserData.incorrect.password
      );

      await RegistrationFormGroupInstance.verifyTextErrorValue(
        errors.wrongDataErrors.password
      );
    });
  });

  test.describe('trigger errors on input "Re-enter password" field in registration form group', async () => {
    test('trigger empty field error and verify border color value', async ({
      page,
    }) => {
      const RegistrationFormGroupInstance = new RegistrationFormGroup(page);

      await RegistrationFormGroupInstance.triggerFieldError(
        RegistrationFormGroupInstance.getInputReEnterPasswordField
      );

      await RegistrationFormGroupInstance.verifyBorderColorValue(
        RegistrationFormGroupInstance.getInputReEnterPasswordField
      );
    });

    test('trigger empty field error and verify text error value', async ({
      page,
    }) => {
      const RegistrationFormGroupInstance = new RegistrationFormGroup(page);

      await RegistrationFormGroupInstance.triggerFieldError(
        RegistrationFormGroupInstance.getInputReEnterPasswordField
      );

      await RegistrationFormGroupInstance.verifyTextErrorValue(
        errors.emptyFieldRequiredErrors.repeatPassword
      );
    });

    test('trigger and verify wrong data error', async ({ page }) => {
      const RegistrationFormGroupInstance = new RegistrationFormGroup(page);

      await RegistrationFormGroupInstance.triggerFieldError(
        RegistrationFormGroupInstance.getInputReEnterPasswordField
      );

      await RegistrationFormGroupInstance.fillInputField(
        RegistrationFormGroupInstance.getInputReEnterPasswordField,
        testUserData.incorrect.repeatPassword
      );

      await RegistrationFormGroupInstance.verifyTextErrorValue(
        errors.wrongDataErrors.repeatPassword
      );
    });
  });

  test.describe('registration e2e flow', async () => {
    test('successful registration', async ({ page }) => {
      const RegistrationFormGroupInstance = new RegistrationFormGroup(page);

      await RegistrationFormGroupInstance.fillInputField(
        RegistrationFormGroupInstance.getInputNameField,
        testUserData.correct.name
      );

      await RegistrationFormGroupInstance.fillInputField(
        RegistrationFormGroupInstance.getInputLastNameField,
        testUserData.correct.lastName
      );

      await RegistrationFormGroupInstance.fillInputField(
        RegistrationFormGroupInstance.getInputEmailField,
        testUserData.correct.registrationEmail
      );

      await RegistrationFormGroupInstance.fillInputField(
        RegistrationFormGroupInstance.getInputPasswordField,
        testUserData.correct.password
      );

      await RegistrationFormGroupInstance.fillInputField(
        RegistrationFormGroupInstance.getInputReEnterPasswordField,
        testUserData.correct.repeatPassword
      );

      await RegistrationFormGroupInstance.clickRegisterButton();
      await expect(page).toHaveURL('https://qauto.forstudy.space/panel/garage');
    });
  });
});
