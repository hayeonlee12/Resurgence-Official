/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/main/resources/static/js/main.js":
/*!**********************************************!*\
  !*** ./src/main/resources/static/js/main.js ***!
  \**********************************************/
/***/ (() => {

eval("// Selecting elements\nconst addPostBtn = document.getElementById(\"addPostBtn\");\nconst postFormContainer = document.getElementById(\"postFormContainer\");\nconst postForm = document.getElementById(\"postForm\");\nconst postContainer = document.getElementById(\"postContainer\");\n\n// Toggle form display\naddPostBtn.addEventListener(\"click\", () => {\n  console.log(\"Add Post Button Clicked\");\n  postFormContainer.style.display = postFormContainer.style.display === \"none\" ? \"block\" : \"none\";\n});\n\n// Fetch all posts and display them\nasync function fetchPosts() {\n  try {\n    const response = await fetch(\"/api/blog\");\n    const posts = await response.json();\n    postContainer.innerHTML = \"\"; // Clear existing posts\n\n    posts.forEach(post => {\n      const postElement = document.createElement(\"div\");\n      postElement.className = \"col\";\n      postElement.innerHTML = `\n                <div class=\"card h-100\">\n                    <div class=\"card-body\">\n                        <h5 class=\"blog-post-title\" data-post-id=\"${post.id}\" style=\"cursor: pointer; color: blue; text-decoration: underline;\">\n                            ${post.title}\n                        </h5>\n                        <p class=\"blog-post-meta\">${new Date(post.date).toLocaleDateString()} by ${post.author}</p>\n                        <p>${post.content}</p>\n                        ${post.media ? `<img src=\"${post.media}\" class=\"img-fluid mt-2\" alt=\"Media\">` : \"\"}\n                    </div>\n                </div>\n            `;\n      postContainer.appendChild(postElement);\n\n      // Add click event to the title for redirect\n      postElement.querySelector(\".blog-post-title\").addEventListener(\"click\", () => {\n        window.location.href = `/resurgence/Blog/${post.id}`;\n      });\n    });\n  } catch (error) {\n    console.error(\"Error fetching posts:\", error);\n  }\n}\n\n// Handle new post submission\npostForm.addEventListener(\"submit\", function (event) {\n  event.preventDefault();\n  console.log(\"Form submitted\");\n\n  // Collect form data\n  const post = {\n    title: document.getElementById(\"title\").value,\n    author: document.getElementById(\"author\").value,\n    date: document.getElementById(\"date\").value,\n    content: document.getElementById(\"content\").value\n  };\n  const mediaInput = document.getElementById(\"media\");\n\n  // Process media file if provided\n  if (mediaInput.files.length > 0) {\n    const reader = new FileReader();\n    reader.onload = function (event) {\n      post.media = event.target.result; // Base64 encoded image\n      submitPost(post);\n    };\n    reader.readAsDataURL(mediaInput.files[0]);\n  } else {\n    submitPost(post);\n  }\n});\n\n// Function to submit post and refresh the list\nasync function submitPost(post) {\n  try {\n    const response = await fetch(\"/api/blog\", {\n      method: \"POST\",\n      headers: {\n        \"Content-Type\": \"application/json\"\n      },\n      body: JSON.stringify(post)\n    });\n    if (response.ok) {\n      await fetchPosts(); // Refresh posts\n      postForm.reset(); // Clear form\n      postFormContainer.style.display = \"none\"; // Hide form\n      console.log(\"Post submitted and form hidden\");\n    } else {\n      console.error(\"Error submitting post:\", await response.text());\n    }\n  } catch (error) {\n    console.error(\"Error submitting post:\", error);\n  }\n}\n\n// Load posts on page load\nwindow.onload = fetchPosts;\n\n//# sourceURL=webpack:///./src/main/resources/static/js/main.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/main/resources/static/js/main.js"]();
/******/ 	
/******/ })()
;