import { test, expect } from '@playwright/test';

test('test compra', async ({ page }) => {
    // Go to https://www.mercadolibre.com.co/
    await page.goto('https://www.mercadolibre.com.co/');
    // Click [placeholder="Buscar productos\, marcas y más…"]
    await page.locator('[placeholder="Buscar productos\\, marcas y más…"]').click();
    // Fill [placeholder="Buscar productos\, marcas y más…"]
    await page.locator('[placeholder="Buscar productos\\, marcas y más…"]').fill('windows 10 pro');
    // Click text=Ir al contenido principalMercado Libre Colombia - Donde comprar y vender de todo >> button
    await page.locator('text=Ir al contenido principalMercado Libre Colombia - Donde comprar y vender de todo >> button').click();
    await expect(page).toHaveURL('https://listado.mercadolibre.com.co/windows-10-pro#D[A:windows%2010%20pro]');
    // Click text=Clave Original 1 Pc
    await page.locator('text=Clave Original 1 Pc').click();
    // Click button:has-text("Comprar ahora")
    await Promise.all([
      page.waitForNavigation(/*{ url: 'https://www.mercadolibre.com/jms/mco/lgz/msl/login/H4sIAAAAAAAEA22P3UrDQBSE3-VAcpU0Ta1FF4LUQkHpz4XaoiLLZnOSLt1k181J01j67pIqXnk5MPPNzAm0KVTFqbMIDNKmgwCsFpQbV3KVAYNSQwC1IvyV0vQW4USJhK4GduoZBWb3mBvXU3Kha4QAREM7nmvTAvupgQBUzfFI6CqheYvpQWEL7BIIoDDAYEdkaxZFbdsOSnRSZEar1OFAmnIgTVR8RXKHcm8aitKmu5OmIjxSclDW_2xERYq6JPa5rF2ebLeTWNnNInx9i1fP9kGNh_XLYjWeqLyrumw7fdqM_dJkmFhRoK8I-9PJcraeDK_HN7fDOPatcFgRb5xOLtu8q6k3mnujuXCkZKPNfzO90Xw5W4d_lFBqccDQOFWoSugwDq0M-eMSzgHkoiZOTsg9MHINBpCh1KrCDNj7x_kbO2bkXaMBAAA/notregistered' }*/),
      page.locator('button:has-text("Comprar ahora")').click()
    ]);
    // Click text=¡Hola! Para comprar, ingresa a tu cuenta
    await page.locator('text=¡Hola! Para comprar, ingresa a tu cuenta').click();
});

test('test comprobar navegación', async({page})=>{
    
  // Go to https://www.mercadolibre.com.co/
  await page.goto('https://www.mercadolibre.com.co/');
  // Click a:has-text("Ofertas") >> nth=1
  await page.locator('a:has-text("Ofertas")').nth(1).click();
  await expect(page).toHaveURL('https://www.mercadolibre.com.co/ofertas#nav-header');
  // Click text=Menos de $40.000
  await page.locator('text=Menos de $50.000').click();
  await expect(page).toHaveURL('https://www.mercadolibre.com.co/ofertas?price=0.0-40000.0&container_id=MCO779366-1#origin=scut&filter_applied=price&filter_position=6&is_recommended_domain=false');
  // Click text=Libros, Revistas y Comics (13)
  await page.locator('text=Libros, Revistas y Comics').click();
  await expect(page).toHaveURL('https://www.mercadolibre.com.co/ofertas?cat=MCO3025&price=0.0-40000.0&container_id=MCO779366-1#origin=qcat&filter_applied=category_id&filter_position=3');
  // Click h1:has-text("Libros, Revistas y Comics")
  await page.locator('h1:has-text("Libros, Revistas y Comics")').click();
});

test('test modificar ubicación',async({page}) =>{
    // Go to https://www.mercadolibre.com.co/
    await page.goto('https://www.mercadolibre.com.co/');
    // Click text=Ayuda / PQR >> nth=1
    await page.locator('text=Ayuda / PQR').nth(1).click();
    await expect(page).toHaveURL('https://www.mercadolibre.com.co/ayuda#nav-header');
    // Click [placeholder="Buscar"]
    await page.locator('[placeholder="Buscar"]').click();
    // Fill [placeholder="Buscar"]
    await page.locator('[placeholder="Buscar"]').fill('suscripcion');
    // Press Enter
    await page.locator('[placeholder="Buscar"]').press('Enter');
    await expect(page).toHaveURL('https://www.mercadolibre.com.co/ayuda/search?q=suscripcion');
    // Click [aria-label="portal-content-list"] div:has-text("Cómo pago mi suscripción") >> nth=0
    await page.locator('[aria-label="portal-content-list"] div:has-text("Cómo pago mi suscripción")').first().click();
    await expect(page).toHaveURL('https://www.mercadolibre.com.co/ayuda/18153');
    // Click [data-testid="yes-btn"]
    await page.locator('[data-testid="yes-btn"]').click();
    // Click text=¡Muchas gracias! Tu opinión ayuda a mejorar esta información para todas las pers
    await page.locator('text=¡Muchas gracias! Tu opinión ayuda a mejorar esta información para todas las pers').click();  
});