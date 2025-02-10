import { test } from '../fixture/fixturesBase';
import { brand } from '../helpers/brand';
import { model } from '../helpers/model';

test.describe('add car to garage', () => {
  test('add Porsche Panamera', async ({ userGaragePage }) => {
    await userGaragePage.openAddCarFormGroup();
    await userGaragePage.addCar(brand.Porsche, model.Porsche.Panamera, '111');
  });

  test('add Fiat Panda', async ({ userGaragePage }) => {
    await userGaragePage.openAddCarFormGroup();
    await userGaragePage.addCar(brand.Fiat, model.Fiat.Panda, '111');
  });

  test('add Fiat Punto', async ({ userGaragePage }) => {
    await userGaragePage.openAddCarFormGroup();
    await userGaragePage.addCar(brand.Fiat, model.Fiat.Punto, '111');
  });

  test('add Fiat Scudo', async ({ userGaragePage }) => {
    await userGaragePage.openAddCarFormGroup();
    await userGaragePage.addCar(brand.Fiat, model.Fiat.Scudo, '111');
  });

  test('add Ford Fusion', async ({ userGaragePage }) => {
    await userGaragePage.openAddCarFormGroup();
    await userGaragePage.addCar(brand.Ford, model.Ford.Fusion, '111');
  });

  test('add Ford Mondeo', async ({ userGaragePage }) => {
    await userGaragePage.openAddCarFormGroup();
    await userGaragePage.addCar(brand.Ford, model.Ford.Mondeo, '111');
  });

  test('add Ford Sierra', async ({ userGaragePage }) => {
    await userGaragePage.openAddCarFormGroup();
    await userGaragePage.addCar(brand.Ford, model.Ford.Sierra, '111');
  });

  test('add BMW X5', async ({ userGaragePage }) => {
    await userGaragePage.openAddCarFormGroup();
    await userGaragePage.addCar(brand.BMW, model.BMW.X5, '111');
  });

  test('add BMW Z3', async ({ userGaragePage }) => {
    await userGaragePage.openAddCarFormGroup();
    await userGaragePage.addCar(brand.BMW, model.BMW.Z3, '111');
  });

  test('add BMW X6', async ({ userGaragePage }) => {
    await userGaragePage.openAddCarFormGroup();
    await userGaragePage.addCar(brand.BMW, model.BMW.X6, '111');
  });
});
