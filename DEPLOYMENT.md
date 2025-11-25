# Deployment & Domain Guide

## 1. Deploying to Vercel (Online Domain)
The easiest way to get your Tesla Investment site online with a real URL is using **Vercel**, the creators of Next.js.

### Steps:
1.  **Create a GitHub Repository**:
    *   Go to [GitHub](https://github.com) and create a new repository (e.g., `tesla-investment`).
    *   Push your local code to this repository:
        ```bash
        git init
        git add .
        git commit -m "Initial commit"
        git branch -M main
        git remote add origin <your-repo-url>
        git push -u origin main
        ```
2.  **Connect to Vercel**:
    *   Go to [Vercel](https://vercel.com) and sign up/login.
    *   Click **"Add New..."** -> **"Project"**.
    *   Import your `tesla-investment` repository.
3.  **Deploy**:
    *   Click **"Deploy"**. Vercel will automatically detect Next.js and build your site.
    *   Once done, you will get a URL like `https://tesla-investment-yourname.vercel.app`.

### Custom Domain:
*   On your Vercel project dashboard, go to **Settings** -> **Domains**.
*   You can add a custom domain (e.g., `tesla-investment.com`) if you have purchased one.

---

## 2. Local Domain Alias (tesla-investment.local)
If you want to access the site via `http://tesla-investment.local:3000` on your own computer instead of `localhost:3000`, follow these steps:

### Windows:
1.  Open **Notepad** as Administrator (Right-click -> Run as administrator).
2.  Open the file: `C:\Windows\System32\drivers\etc\hosts`
3.  Add the following line to the bottom of the file:
    ```
    127.0.0.1 tesla-investment.local
    ```
4.  Save the file.
5.  Now, when your server is running (`npm run dev`), you can visit [http://tesla-investment.local:3000](http://tesla-investment.local:3000).

### macOS / Linux:
1.  Open Terminal.
2.  Edit the hosts file: `sudo nano /etc/hosts`
3.  Add the line: `127.0.0.1 tesla-investment.local`
4.  Save and exit (Ctrl+O, Enter, Ctrl+X).
