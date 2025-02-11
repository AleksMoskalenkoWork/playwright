import test, { expect, request } from '@playwright/test';
import { testUserData } from '../helpers/testUserData';

test.describe('use APIRequestContext for test', () => {
  let authCookieSid;

  test.beforeAll(async ({ request }) => {
    let responseLoginUser = await request.post('/api/auth/signin', {
      data: {
        email: testUserData.correct.currentEmail,
        password: testUserData.correct.password,
        remember: false,
      },
    });
    authCookieSid = authCookieSid = responseLoginUser
      .headers()
      ['set-cookie'].split(';')[0];
  });

  test.describe('positive test', async () => {
    test('add car with used APIRequestContext', async ({ request }) => {
      const responseAddCar = await request.post('/api/cars', {
        data: {
          carBrandId: 1,
          carModelId: 1,
          mileage: 122,
        },
        headers: {
          Cookie: authCookieSid,
        },
      });
    });

    test('get list cars and delete all cars used APIRequestContext', async ({
      request,
    }) => {
      const responseListCars = await request.get('/api/cars', {
        headers: {
          Cookie: authCookieSid,
        },
      });

      const getListCarsJson = await responseListCars.json();
      let listCars = getListCarsJson.data.map((x) => x.id);

      // listCars.forEach(async (id) => {
      //   const deleteAllCars = await request.delete(`/api/cars/${id}`, {
      //     headers: {
      //       Cookie: authCookieSid,
      //     },
      //   });
      // });

      for (const carID of listCars) {
        const deleteAllCars = await request.delete(`/api/cars/${carID}`, {
          headers: {
            Cookie: authCookieSid,
          },
        });
      }
    });
  });

  test.describe('negative', () => {
    test('verify add car api error message when user not authorized', async ({
      request,
    }) => {
      const responseAddCar = await request.post('/api/cars', {
        data: {
          carBrandId: 1,
          carModelId: 1,
          mileage: 122,
        },
      });
      const responseJson = await responseAddCar.json();

      expect(responseJson.message).toBe('Not authenticated');
      expect(responseJson.status).toBe('error');
    });

    test('verify add car api error message when user not set data', async ({
      request,
    }) => {
      const responseAddCar = await request.post('/api/cars', {
        headers: {
          Cookie: authCookieSid,
        },
      });
      const responseJson = await responseAddCar.json();

      expect(responseJson.message).toBe('Car brand id is required');
      expect(responseAddCar.status()).toBe(400);
    });

    test('verify add car api error message when user set wrong api path', async ({
      request,
    }) => {
      const responseAddCar = await request.post('/api/cars/..', {
        data: {
          carBrandId: 1,
          carModelId: 1,
          mileage: 122,
        },
        headers: {
          Cookie: authCookieSid,
        },
      });
      const responseJson = await responseAddCar.json();

      expect(responseJson.message).toBe('Not found');
      expect(responseAddCar.status()).toBe(404);
    });
  });
});
