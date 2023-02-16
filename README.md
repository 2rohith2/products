# 📦 Explore Products

User can explore all products or by specific category

## Product Requirements

- Each list item(product) must have a **thumbnail, title, price, brand and discount** displayed.
- You need to load 10 products by default and provide an option to paginate and Search.
  - You can search by name
- Upon clicking a product on the list
  - A modal should open and it should display the images as carousal (Automatic or manual) and all other details of the product organized in a layout that you feel is better
- You need to provide a page to display all the available product categories. By clicking any
  category, you should see the list of posts by category
- The list must have 10 items displayed and behave like the above list
- The list must have pagination and search

## 🚀 About Me

Hi 👋, I'm Rohith Kumar, a passionate JavaScript fullstack developer.

- A decade of experience developing Enterprise SaaS applications with a faster go-to-market strategy with built-in production grade quality.
- Knowledgeable about the CyberSecurity, Telecom industry and OTT platform.
- Knowledgeable about leveraging the JavaScript ecosystem to design, build, and launch end-to-end solutions based on fresh ideas for enterprise SaaS applications.
- Capable of building strong relationship with developers and product stakeholders, iteratively to build the products with best the practices.

## Decisions

- Used [DummyJSON](https://dummyjson.com/) for the API communication
- Used `select` in the query params to get only the required data to render on the screen, omitted other fields in the response.
- [DummyJSON](https://dummyjson.com/) provides search with pagination, I have leverage the same mechanisms
- Decided to show the description of the product, as it helps to enhance the UI look & feel.
- Used [Vite](https://vitejs.dev/) instead of CRA.
- Used AntDesign Breadcrumb for easy navigation
- Used AntDesign Modal, Carousel, Pagination, Tooltip and Loading UI
- [DummyJSON](https://dummyjson.com/) doesn't support search for the products under category, it supports the search for all the products

## 🔗 Links

[![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://github.com/2rohith2)
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](http://in.linkedin.com/in/2rohith2)
[![Live Demo](https://img.shields.io/badge/Live-Demo-green)](https://2rohith2.ml/products)

## Tech stack used

#### 🔦 Coding Methodology

- Clean Code
- Container Component Pattern

#### 🖥️ Technology

- HTML
- CSS
- JavaScript
- ReactJs
- TypeScript
- SCSS (CSS Preprocessor)
- [Ant Design](https://ant.design/)
- [HTML Accessibility](https://developer.mozilla.org/en-US/docs/Learn/Accessibility/HTML)
- [HTML Semantics](https://developer.mozilla.org/en-US/docs/Glossary/Semantics#semantic_elements)

## License

[![MIT License](https://img.shields.io/apm/l/atomic-design-ui.svg?)](https://github.com/tterb/atomic-design-ui/blob/master/LICENSEs)

## Run Locally

Clone the project

```bash
  git clone https://github.com/2rohith2/gohighlevel.git
```

Go to the project directory

```bash
  cd products
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run dev
```

Link to access

```bash
  http://127.0.0.1:5173/
```

## ✏️ Feedback

If you have any feedback, please reach out to me at rohith_kumar222@hotmail.com
