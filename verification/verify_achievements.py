import asyncio
from playwright.async_api import async_playwright

async def main():
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        page = await browser.new_page()
        await page.goto('http://localhost:3000')

        # Scroll to achievements section
        heading = page.get_by_role("heading", name="Наши достижения")
        await heading.scroll_into_view_if_needed()

        # Wait a bit for animations if any
        await page.wait_for_timeout(1000)

        # Capture screenshot
        await page.screenshot(path='verification/achievements_screenshot.png')
        await browser.close()

if __name__ == '__main__':
    asyncio.run(main())
