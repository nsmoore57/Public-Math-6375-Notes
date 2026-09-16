var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "introduction-machine-learning",
  "level": "1",
  "url": "introduction-machine-learning.html",
  "type": "Section",
  "number": "1.1",
  "title": "Introduction to Machine Learning",
  "body": " Introduction to Machine Learning   Artificial intelligence (AI) and machine learning have become ubiquitous topics in recent media, extending beyond tech-focused publications. The future they promise oscillates between dystopian and utopian visions: intelligent chatbots, autonomous vehicles, and virtual assistants on one hand; job scarcity and AI-dominated economies on the other.  As a current or aspiring machine learning practitioner, it’s crucial to discern genuine breakthroughs from exaggerated claims. Your role in shaping this AI-driven future is significant, and this course will equip you to develop AI agents yourself.  To navigate this landscape, we must address several key questions:   What are the actual achievements of machine learning to date?  How impactful are these developments?  What’s the next frontier for AI?  Is the hype surrounding AI justified?   Before delving into these inquiries, it’s essential to establish a clear understanding of artificial intelligence and machine learning. What do these terms mean? How are they interconnected? This lecture aims to provide the necessary context to explore these fundamental concepts and their implications for our future.    What Is Artificial Intelligence?   Artificial intelligence emerged in the 1950s when a small group of computer science pioneers began exploring the idea of whether computers could be made to “think.” This question, with its profound implications, continues to be a subject of investigation today. AI can be succinctly defined as the pursuit of automating intellectual tasks that are typically performed by humans. This broad field includes machine learning but also encompasses various other approaches that do not involve learning. For example, early chess programs operated solely on hardcoded rules created by programmers, without any machine learning components. For quite some time, many experts believed that achieving human-level AI was possible by crafting an extensive set of explicit rules for knowledge manipulation, a method known as symbolic AI. This approach dominated the AI landscape from the 1950s until the late 1980s, reaching its zenith during the expert systems boom of the 1980s.   The relation between AI and machine learning    While symbolic AI was effective for addressing well-defined, logical problems like chess, it struggled with more complex and ambiguous tasks, such as image classification, speech recognition, and language translation, where explicit rules proved difficult to define. This limitation led to the emergence of a new approach: machine learning , which began to take the place of symbolic AI.    What Is Machine Learning?  In Victorian England, Lady Ada Lovelace collaborated closely with Charles Babbage, the inventor of the Analytical Engine, which is considered the first general-purpose mechanical computer. Although innovative and far ahead of its time, the Analytical Engine wasn’t originally conceived as a general-purpose computer when it was designed in the 1830s and 1840s because the idea of general-purpose computation had not yet been developed. Instead, it was intended to automate specific computations in mathematical analysis, hence the name “Analytical Engine.” In 1843, Ada Lovelace commented on this invention, stating, “The Analytical Engine has no pretensions whatever to originate anything. It can do whatever we know how to order it to perform.… Its province is to assist us in making available what we’re already acquainted with.”   Lady Ada Lovelace and Charles Babbage   Photographs of Lady Ada Lovelace and Charles Babbage    This observation was later cited by AI pioneer Alan Turing in his seminal 1950 paper, “Computing Machinery and Intelligence,” where he referred to it as “Lady Lovelace’s objection.” Turing used Lovelace’s remark as a basis for considering whether general-purpose computers could achieve learning and originality, ultimately concluding that they could.   Alan Turing   A photograph of Alan Turing    Machine learning stems from this very question: could a computer transcend the limitations of “what we know how to order it to perform” and independently learn to execute a task? Could it exhibit behavior that surprises us? Instead of programmers manually creating rules for data processing, could a computer automatically learn these rules by analyzing data?  This inquiry leads to a new programming paradigm. In classical programming, which aligns with the symbolic AI approach, humans provide rules (a program) and data to be processed according to these rules, resulting in answers. With machine learning, however, humans supply data along with the expected outcomes, and the system generates the rules. These learned rules can then be applied to new data to produce original outcomes.   Paradigms of classical programming and machine learning   Two flowcharts. The top flow chart represents classical programming, while the bottom flow chart represents machine learning. In classical programming, the programmer provides rules and data and the program produces answers. In machine learning, the programmer provides data and answers, and the system learns rules from this data.    Consider, for instance, how you might develop a spam filter using traditional programming methods:   You would begin by analyzing common characteristics of spam emails, such as frequent words or phrases like “4U,” “credit card,” “free,” and “amazing” in the subject line. You might also observe other patterns in the sender’s name, the email body, and so on.  Based on these observations, you would write algorithms to detect each pattern, and your program would flag emails as spam if they matched several of these patterns.  You would then test your program and refine it by repeating steps 1 and 2 until it performs adequately.  Given the complexity of the problem, your program would likely evolve into a lengthy and intricate set of rules, making it difficult to maintain.   In contrast, a spam filter based on machine learning techniques would automatically learn which words and phrases are strong indicators of spam by identifying patterns that are more frequent in spam emails compared to regular (nonspam, or “ham”) emails. The examples used by the system to learn are known as the training set, with each example being a training instance or sample. In this scenario, the task T is to identify spam in new emails, the experience E is the training data, and the performance measure P must be defined—such as the proportion of correctly classified emails. This measure is known as accuracy, a common metric in classification tasks.  Therefore, a machine-learning system is trained rather than explicitly programmed. It is exposed to numerous examples related to a specific task, and it uncovers statistical patterns within these examples that enable it to develop rules for automating the task. At its core, machine learning involves creating mathematical models to interpret data. “Learning” occurs when these models are equipped with tunable parameters that can adapt based on observed data, allowing the program to “learn” from the data. Once these models have been fitted to past data, they can be used to predict and interpret new data.    Why Use Machine Learning?  Although machine learning began to gain significant momentum in the 1990s, it rapidly emerged as the most popular and successful branch of AI, a growth fueled by advancements in hardware and the availability of vast datasets. While machine learning is closely connected to mathematical statistics, it diverges from traditional statistics in several key aspects. Unlike classical statistical methods, such as Bayesian analysis, which may be impractical for handling large and complex datasets, machine learning is specifically designed to manage and analyze extensive datasets—such as those containing millions of images, each with tens of thousands of pixels.   Fugaku: the world’s fastest supercomputer in 2020   A photograph of Fugaku, the world’s fastest supercomputer in 2020.      Categories of Machine Learning     To effectively utilize machine learning tools, it’s crucial to first understand the problem setting. This involves categorizing the different types of approaches we’ll be discussing.  At its core, machine learning can be divided into two primary categories: supervised learning and unsupervised learning.  Supervised learning focuses on modeling the relationship between the measured features of data and a corresponding label. Once this model is established, it can be used to predict labels for new, unseen data. Supervised learning is further broken down into classification and regression tasks. In classification, the labels are discrete categories, whereas in regression, the labels represent continuous values.   The spam filter is a good example of classification: it is trained with many example emails along with their class (spam or ham), and it must learn how to classify new emails.    Predicting the price of a car is a good example of regression: To train the system, you need to give it many examples of cars, including both their features(mileage, age, brand, etc.) called predictors and their labels (i.e., their prices).    Note that some regression algorithms can be used for classification as well, and vice versa. For example, Logistic Regression is commonly used for classification, as it can output a value that corresponds to the probability of belonging to a given class (e.g., 20% chance of being spam).   Unsupervised learning focuses on modeling the features of a dataset without relying on any labels, often described as “letting the dataset speak for itself.” This approach includes tasks like clustering and dimensionality reduction . Clustering algorithms work by identifying distinct groups or patterns within the data, while dimensionality reduction algorithms aim to find more compact and simplified representations of the data, reducing the number of variables while retaining essential information.   Say you have a lot of data about your blog’s visitors. You may want to run a clustering algorithm to try to detect groups of similar visitors. At no point do you tell the algorithm which group a visitor belongs to: it finds those connections without your help. For example, it might notice that 40% of your visitors are males who love comic books and generally read your blog in the evening, while 20% are young sci-fi lovers who visit during the weekends, and so on.   Additionally, there are semi-supervised learning methods, which bridge the gap between supervised and unsupervised learning. These methods are particularly useful when only partial or incomplete labels are available. For example, photo-hosting services like Google Photos often employ semi-supervised learning techniques to organize and categorize images, leveraging a mix of labeled and unlabeled data to improve accuracy and performance.   Once you upload all your family photos to the service, it automatically recognizes that the same person A shows up in photos 1, 5, and 11, while another person B shows up in photos 2, 5, and 7. This is the unsupervised part of the algorithm (clustering). Now all the system needs is for you to tell it who these people are. Just one label per person, and it is able to name everyone in every photo, which is useful for searching photos.     Wrap Up  This lecture introduced artificial intelligence and machine learning. You are expected to be able to figure out the difference between the classical programming and machine learning, and capable to categorize the given machine learning examples into the proper types, i.e., supervised learning (classification or regression), unsupervised learning, and semi-supervised learning.  This comprehensive introduction provides a solid foundation for understanding AI and machine learning. You should now be able to:   Differentiate between classical programming and machine learning approaches  Categorize machine learning examples into supervised, unsupervised, semi-supervised, or reinforcement learning types  Understand the key components and applications of machine learning   As you delve deeper into machine learning, remember that this rapidly evolving field offers immense opportunities for innovation and impact across various domains. Stay curious, keep learning, and always strive to apply these powerful tools responsibly.   "
},
{
  "id": "figure-relation-ai-machine-learning",
  "level": "2",
  "url": "introduction-machine-learning.html#figure-relation-ai-machine-learning",
  "type": "Figure",
  "number": "1.1.1",
  "title": "",
  "body": " The relation between AI and machine learning   "
},
{
  "id": "figure-ada-charles",
  "level": "2",
  "url": "introduction-machine-learning.html#figure-ada-charles",
  "type": "Figure",
  "number": "1.1.2",
  "title": "",
  "body": " Lady Ada Lovelace and Charles Babbage   Photographs of Lady Ada Lovelace and Charles Babbage   "
},
{
  "id": "figure-alan-turing",
  "level": "2",
  "url": "introduction-machine-learning.html#figure-alan-turing",
  "type": "Figure",
  "number": "1.1.3",
  "title": "",
  "body": " Alan Turing   A photograph of Alan Turing   "
},
{
  "id": "figure-programming-paradigms",
  "level": "2",
  "url": "introduction-machine-learning.html#figure-programming-paradigms",
  "type": "Figure",
  "number": "1.1.4",
  "title": "",
  "body": " Paradigms of classical programming and machine learning   Two flowcharts. The top flow chart represents classical programming, while the bottom flow chart represents machine learning. In classical programming, the programmer provides rules and data and the program produces answers. In machine learning, the programmer provides data and answers, and the system learns rules from this data.   "
},
{
  "id": "figure-fugaku",
  "level": "2",
  "url": "introduction-machine-learning.html#figure-fugaku",
  "type": "Figure",
  "number": "1.1.5",
  "title": "",
  "body": " Fugaku: the world’s fastest supercomputer in 2020   A photograph of Fugaku, the world’s fastest supercomputer in 2020.   "
},
{
  "id": "example-1-1",
  "level": "2",
  "url": "introduction-machine-learning.html#example-1-1",
  "type": "Example",
  "number": "1.1.6",
  "title": "",
  "body": " The spam filter is a good example of classification: it is trained with many example emails along with their class (spam or ham), and it must learn how to classify new emails.  "
},
{
  "id": "example-1-2",
  "level": "2",
  "url": "introduction-machine-learning.html#example-1-2",
  "type": "Example",
  "number": "1.1.7",
  "title": "",
  "body": " Predicting the price of a car is a good example of regression: To train the system, you need to give it many examples of cars, including both their features(mileage, age, brand, etc.) called predictors and their labels (i.e., their prices).  "
},
{
  "id": "regression-classification-note",
  "level": "2",
  "url": "introduction-machine-learning.html#regression-classification-note",
  "type": "Note",
  "number": "1.1.8",
  "title": "",
  "body": " Note that some regression algorithms can be used for classification as well, and vice versa. For example, Logistic Regression is commonly used for classification, as it can output a value that corresponds to the probability of belonging to a given class (e.g., 20% chance of being spam).  "
},
{
  "id": "example-1-3",
  "level": "2",
  "url": "introduction-machine-learning.html#example-1-3",
  "type": "Example",
  "number": "1.1.9",
  "title": "",
  "body": " Say you have a lot of data about your blog’s visitors. You may want to run a clustering algorithm to try to detect groups of similar visitors. At no point do you tell the algorithm which group a visitor belongs to: it finds those connections without your help. For example, it might notice that 40% of your visitors are males who love comic books and generally read your blog in the evening, while 20% are young sci-fi lovers who visit during the weekends, and so on.  "
},
{
  "id": "example-1-4",
  "level": "2",
  "url": "introduction-machine-learning.html#example-1-4",
  "type": "Example",
  "number": "1.1.10",
  "title": "",
  "body": " Once you upload all your family photos to the service, it automatically recognizes that the same person A shows up in photos 1, 5, and 11, while another person B shows up in photos 2, 5, and 7. This is the unsupervised part of the algorithm (clustering). Now all the system needs is for you to tell it who these people are. Just one label per person, and it is able to name everyone in every photo, which is useful for searching photos.  "
},
{
  "id": "week-01-install-python-uv",
  "level": "1",
  "url": "week-01-install-python-uv.html",
  "type": "Section",
  "number": "1.2",
  "title": "Installing Python and uv",
  "body": " Installing Python and uv    Install uv , the tool used to manage the course Python environment.  Confirm that the terminal can find uv before syncing the course environment.  Sync the course environment and open jupyter lab    If you already have uv installed, you do not need to reinstall it. You may still run the verification commands below. If a command reports that uv is not found, install uv first and then open a new terminal before continuing.   Video: Installing uv and Opening JupyterLab  This video demonstrates first-time setup: installing or verifying uv , installing the course Python version, synchronizing the course project environment, launching JupyterLab, and confirming the setup in the getting-started notebook.     Step 1: Install uv  First, go to the uv installation page at https:\/\/astral.sh\/uv\/install . Close to the top of the page, you will see the installation command for your operating system. The command for Windows is shown below. For the macOS and Linux command, click the appropriate header right above the command.  Windows installation command for uv.   A screenshot of the uv installer page with the Windows installation command.     On Windows, open PowerShell . On macOS or Linux, open Terminal . Then use the command for your operating system.    Operating system  Command    Windows PowerShell  irm https:\/\/astral.sh\/uv\/install.ps1 | iex    macOS or Linux  curl -LsSf https:\/\/astral.sh\/uv\/install.sh | sh    After the installer finishes, close the terminal and open a new one. This lets your operating system reload the command path.    Step 2: Verify uv  Run the following command in the new terminal.   uv --version   If the command prints a version number, uv is installed. If it says that uv is not recognized or not found, restart the terminal once more. If it still fails, ask for help and include the exact error message.  Successful uv installation version command. Your actual version number may be different.   A screenshot of the uv version command output. The version is 0.11.31       Step 3: Extract the course environment folder  Remember that zip file containing the course environment folder from the introduction? Extract it to your desired location. This directory will be the place where you put the programming files for the course. Remember this location for the next step. Remember this location for the next step.    Step 4: Start the Jupyter Lab Server and Environment  If you are running Windows, double-click the Start_Jupyter_Windows.bat file to start the Jupyter Lab server and environment. If you are running macOS or Linux, use the Start_Jupyter_Mac.command script instead. This should install all the required packages for the course and open the Jupyter Lab interface in your web browser.  The course environment folder with the Start_Jupyter_Windows.bat or Start_Jupyter_Mac.command script.   A screenshot of the course environment folder with the Start_Jupyter_Windows.bat or Start_Jupyter_Mac.command script.       Step 5: Jupyter Lab Should Be Running  Once you have started the Jupyter Lab server and environment, you should see the Jupyter Lab interface in your web browser.  The Jupyter Lab interface in your web browser.   A screenshot of the Jupyter Lab interface in your web browser.       What to do if setup fails  Do not delete random files or reinstall many tools at once. First copy the exact error message, check the troubleshooting appendix, and ask for help in the course help channel or office hours. Setup troubleshooting is something that AI can help with and you have permission to use it for troubleshooting the installation process.  When asking for help, either from an AI assistant or from me, include the command you ran, the folder where you ran it, your operating system, and the exact error text. A screenshot can be useful, but copied text is usually easier to search and diagnose.   "
},
{
  "id": "week-01-install-python-uv-2",
  "level": "2",
  "url": "week-01-install-python-uv.html#week-01-install-python-uv-2",
  "type": "Objectives",
  "number": "1.2",
  "title": "",
  "body": "  Install uv , the tool used to manage the course Python environment.  Confirm that the terminal can find uv before syncing the course environment.  Sync the course environment and open jupyter lab   "
},
{
  "id": "week-01-install-python-uv-5-2-3",
  "level": "2",
  "url": "week-01-install-python-uv.html#week-01-install-python-uv-5-2-3",
  "type": "Figure",
  "number": "1.2.1",
  "title": "",
  "body": " Windows installation command for uv.   A screenshot of the uv installer page with the Windows installation command.   "
},
{
  "id": "week-01-install-python-uv-5-3",
  "level": "2",
  "url": "week-01-install-python-uv.html#week-01-install-python-uv-5-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "PowerShell Terminal "
},
{
  "id": "week-01-install-python-uv-6-4-3",
  "level": "2",
  "url": "week-01-install-python-uv.html#week-01-install-python-uv-6-4-3",
  "type": "Figure",
  "number": "1.2.2",
  "title": "",
  "body": " Successful uv installation version command. Your actual version number may be different.   A screenshot of the uv version command output. The version is 0.11.31   "
},
{
  "id": "week-01-install-python-uv-8-2-3",
  "level": "2",
  "url": "week-01-install-python-uv.html#week-01-install-python-uv-8-2-3",
  "type": "Figure",
  "number": "1.2.3",
  "title": "",
  "body": " The course environment folder with the Start_Jupyter_Windows.bat or Start_Jupyter_Mac.command script.   A screenshot of the course environment folder with the Start_Jupyter_Windows.bat or Start_Jupyter_Mac.command script.   "
},
{
  "id": "week-01-install-python-uv-9-2-1",
  "level": "2",
  "url": "week-01-install-python-uv.html#week-01-install-python-uv-9-2-1",
  "type": "Figure",
  "number": "1.2.4",
  "title": "",
  "body": " The Jupyter Lab interface in your web browser.   A screenshot of the Jupyter Lab interface in your web browser.   "
},
{
  "id": "week-01-jupyter-basics",
  "level": "1",
  "url": "week-01-jupyter-basics.html",
  "type": "Section",
  "number": "1.3",
  "title": "Getting Started with Jupyter Notebooks",
  "body": " Getting Started with Jupyter Notebooks   To start, we'll open a Jupyter Notebook and get familiar with the interface.   Imagine Jupyter Notebook as your personal science journal: you write notes, do calculations, and see results right away, all in one digital book. It’s perfect for numerical analysis because you can test ideas interactively, like trying different numbers in a formula and seeing the output instantly.    How to Open a .ipynb File  An .ipynb file is a file format associated with Jupyter Notebook. After you launch Jupyter Notebook (Check previous page if you do not know how), your web browser (like Chrome or Firefox) will open automatically, showing a list of files and folders in current work directory. It’s running on your computer, not the internet.  In the browser, click on your .ipynb file. It opens like a webpage you can edit!    Understanding the Interface and Running Code  Now that it’s open, let’s explore the screen together. It’s not complicated—think of it as a notebook with pages you can write on.  Menu Bar at the Top  File for saving or opening, Edit for copying, View to hide\/show parts, Insert to add sections, Cell to run things, Kernel to restart if something goes wrong (like turning off and on a calculator), and Help for tips.   Toolbar Just Below  Quick buttons! The floppy disk saves, the + adds a new section (cell), scissors cut, copy\/paste for cells, the play button runs code, the square stops running code, arrows restart, and a dropdown changes cell type (Code for programming, Markdown for notes).   Cells - The Main Part  These are like blank pages in your journal.  Code Cells: For writing instructions to the computer. They have []: on the left—the brackets show if you've run it (e.g., [1]: means the first \"run\").  Markdown Cells: For writing text, like explanations. Use # for big headings, ## for smaller, * for italics, ** for bold, or - for bullet lists.  When you click a cell, it gets a highlighted border.      Output Area  After running a code cell, results appear below.    Kernel  This is the \"brain\" running in the background. If code gets stuck (infinite loop?), go to Kernel > Restart.    How to Run Code   Click into a code cell—it turns highlighted.  Type a simple instruction, like print(\"Hello, world!\") . (Don’t worry, we’ll explain this soon!)  To run: Hold Shift and press Enter. (Or Ctrl + Enter to stay in the cell, or click the play button.)  Watch: The kernel thinks (asterisk in brackets), then shows output.  If it’s your first run, it starts the kernel automatically.     "
},
{
  "id": "week-01-python-basics",
  "level": "1",
  "url": "week-01-python-basics.html",
  "type": "Section",
  "number": "1.4",
  "title": "Python Basics",
  "body": " Python Basics   Here we learn the ABCs of Python: doing math, comparing things, and storing information. Think of this as learning to use a calculator that can remember numbers and make decisions. For this section, you should be able to find the PythonTutorial.ipynb notebook in the demo directory of the course environment folder.    Variables and Basic Data Types       Mathematical Operations       Lists       Tuples and Dictionaries in Python       Boolean Logic       If Statements       For Loops       While Loops       Functions       Help System in Jupyter Notebooks       Round-Off Error       Python Exceptions      "
},
{
  "id": "week-02-review-essential-mathematics",
  "level": "1",
  "url": "week-02-review-essential-mathematics.html",
  "type": "Section",
  "number": "2.1",
  "title": "Review of Essential Linear Algebra Knowledge",
  "body": " Review of Essential Linear Algebra Knowledge   We will introduce the basic concepts of linear algebra which will be used in this course. Let’s start with some definitions.    Matrices    A matrix is a rectangular array of numbers. The numbers in the array are called the entries of the matrix.    The size of a matrix  is written in terms of the number of its rows and the number of its columns. A matrix has 2 rows and 3 columns. An matrix is also called a square matrix of order n , and the entries is said to be on the main diagonal of .    Main diagonal of matrix A   Main diagonal of matrix A.     The matrix with one row is called row matrix (or row vector). The matrix with one column is called column matrix (or column vector).   We will use capital bold letters to denote matrices and lowercase letters to denote numerical quantities. The entry that occurs in row i and column j of a matrix will be denoted by . Thus a general matrix might be written as   For row and column vectors, we will use boldface lowercase letters to denote, such as and     Matrix Operations   Matrix Addition  Matrix addition is performed by adding the corresponding entries of two matrices of the same size. In more formal notation, if both and are matrices, then is the matrix obtained by:    Scalar Multiplication  Scalar multiplication is performed by multiplying each entry of a matrix by a scalar. Thus, if is an matrix, then is the matrix obtained by multiplying each entry of by :    Matrix Multiplication   If is an matrix and is an matrix, then the product  is the matrix whose entries are determined as follows: To find the entry in row i and column j of , single out row i from the matrix and column j from the matrix . Multiply the corresponding entries from the row and column together, and then add up the resulting products.    Matrix Multiplication       Matrix Multiplication     Matrix Transpose   If is any matrix, then the transpose of , denoted by , is defined to be the matrix that results by interchanging the rows and columns of ; that is, the first column of is the first row of , the second column of is the second row of , and so forth.      Identity Matrix and Inverses   Identity Matrix   A square matrix with 1's on the main diagonal and zeros elsewhere is called an identity matrix .    Matrix Inverses   If is a square matrix, and if a matrix of the same size can be found such that , then is said to be invertible (or nonsingular ) and is called an inverse of , denoted by . If n such matrix can be found, then is said to be singular .      Vectors    In this course, vectors are denoted by lower case bold letters such as , and all vectors are assumed to be column vectors. Uppercase bold letters, such as , denote matrices. The notation denote a row vector, while the corresponding column vector is written as .    The  norm (also called Euclidean norm ) of the vector is denoted by , and is defined by   The  norm of is denoted by , and is defined by     Given two vectors and , the dot product (also called the Euclidean inner product ) of and is denoted by and is defined by     Note that .    "
},
{
  "id": "definition-2-1",
  "level": "2",
  "url": "week-02-review-essential-mathematics.html#definition-2-1",
  "type": "Definition",
  "number": "2.1.1",
  "title": "",
  "body": " A matrix is a rectangular array of numbers. The numbers in the array are called the entries of the matrix.  "
},
{
  "id": "definition-2-2",
  "level": "2",
  "url": "week-02-review-essential-mathematics.html#definition-2-2",
  "type": "Definition",
  "number": "2.1.2",
  "title": "",
  "body": " The size of a matrix  is written in terms of the number of its rows and the number of its columns. A matrix has 2 rows and 3 columns. An matrix is also called a square matrix of order n , and the entries is said to be on the main diagonal of .  "
},
{
  "id": "figure-main-diagonal",
  "level": "2",
  "url": "week-02-review-essential-mathematics.html#figure-main-diagonal",
  "type": "Figure",
  "number": "2.1.3",
  "title": "",
  "body": " Main diagonal of matrix A   Main diagonal of matrix A.   "
},
{
  "id": "definition-2-3",
  "level": "2",
  "url": "week-02-review-essential-mathematics.html#definition-2-3",
  "type": "Definition",
  "number": "2.1.4",
  "title": "",
  "body": " The matrix with one row is called row matrix (or row vector). The matrix with one column is called column matrix (or column vector).  "
},
{
  "id": "definition-2-5",
  "level": "2",
  "url": "week-02-review-essential-mathematics.html#definition-2-5",
  "type": "Definition",
  "number": "2.1.5",
  "title": "",
  "body": " If is an matrix and is an matrix, then the product  is the matrix whose entries are determined as follows: To find the entry in row i and column j of , single out row i from the matrix and column j from the matrix . Multiply the corresponding entries from the row and column together, and then add up the resulting products.  "
},
{
  "id": "anim-matrix-multiplication-light",
  "level": "2",
  "url": "week-02-review-essential-mathematics.html#anim-matrix-multiplication-light",
  "type": "Figure",
  "number": "2.1.6",
  "title": "",
  "body": " Matrix Multiplication    "
},
{
  "id": "anim-matrix-multiplication-dark",
  "level": "2",
  "url": "week-02-review-essential-mathematics.html#anim-matrix-multiplication-dark",
  "type": "Figure",
  "number": "2.1.7",
  "title": "",
  "body": " Matrix Multiplication   "
},
{
  "id": "definition-2-7",
  "level": "2",
  "url": "week-02-review-essential-mathematics.html#definition-2-7",
  "type": "Definition",
  "number": "2.1.8",
  "title": "",
  "body": " If is any matrix, then the transpose of , denoted by , is defined to be the matrix that results by interchanging the rows and columns of ; that is, the first column of is the first row of , the second column of is the second row of , and so forth.  "
},
{
  "id": "definition-2-4",
  "level": "2",
  "url": "week-02-review-essential-mathematics.html#definition-2-4",
  "type": "Definition",
  "number": "2.1.9",
  "title": "",
  "body": " A square matrix with 1's on the main diagonal and zeros elsewhere is called an identity matrix .  "
},
{
  "id": "definition-2-6",
  "level": "2",
  "url": "week-02-review-essential-mathematics.html#definition-2-6",
  "type": "Definition",
  "number": "2.1.10",
  "title": "",
  "body": " If is a square matrix, and if a matrix of the same size can be found such that , then is said to be invertible (or nonsingular ) and is called an inverse of , denoted by . If n such matrix can be found, then is said to be singular .  "
},
{
  "id": "note-74",
  "level": "2",
  "url": "week-02-review-essential-mathematics.html#note-74",
  "type": "Note",
  "number": "2.1.11",
  "title": "",
  "body": " In this course, vectors are denoted by lower case bold letters such as , and all vectors are assumed to be column vectors. Uppercase bold letters, such as , denote matrices. The notation denote a row vector, while the corresponding column vector is written as .  "
},
{
  "id": "definition-2-8",
  "level": "2",
  "url": "week-02-review-essential-mathematics.html#definition-2-8",
  "type": "Definition",
  "number": "2.1.12",
  "title": "",
  "body": " The  norm (also called Euclidean norm ) of the vector is denoted by , and is defined by   The  norm of is denoted by , and is defined by   "
},
{
  "id": "definition-2-9",
  "level": "2",
  "url": "week-02-review-essential-mathematics.html#definition-2-9",
  "type": "Definition",
  "number": "2.1.13",
  "title": "",
  "body": " Given two vectors and , the dot product (also called the Euclidean inner product ) of and is denoted by and is defined by   "
},
{
  "id": "note-103",
  "level": "2",
  "url": "week-02-review-essential-mathematics.html#note-103",
  "type": "Note",
  "number": "2.1.14",
  "title": "",
  "body": " Note that .  "
},
{
  "id": "week-01-numpy-basics",
  "level": "1",
  "url": "week-01-numpy-basics.html",
  "type": "Section",
  "number": "3.1",
  "title": "Introduction to NumPy",
  "body": " Introduction to NumPy   For this section, you should be able to find the Numpy_tutorial.ipynb notebook in the demo directory of the course environment folder.     Basic Array Operations in NumPy       Indexing and Slicing in NumPy      "
},
{
  "id": "week-01-numpy-matrices",
  "level": "1",
  "url": "week-01-numpy-matrices.html",
  "type": "Section",
  "number": "3.2",
  "title": "Dot Products and Matrix Operations in NumPy",
  "body": " Dot Products and Matrix Operations in NumPy  For this section, you should be able to find the Numpy_matrix_ops.ipynb notebook in the demo directory of the course environment folder.   "
},
{
  "id": "week-01-pandas",
  "level": "1",
  "url": "week-01-pandas.html",
  "type": "Section",
  "number": "3.3",
  "title": "Introduction to Pandas",
  "body": " Introduction to Pandas   For this section, you should be able to find the introduction-to-pandas.ipynb notebook in the demo directory of the course environment folder.    Pandas Series       Pandas DataFrames       Selecting and Filtering Data in Pandas       Vectorized Operations in Pandas       Removing Data in Pandas       Reading and Writing CSV Format with Pandas      "
},
{
  "id": "week-01-seaborn",
  "level": "1",
  "url": "week-01-seaborn.html",
  "type": "Section",
  "number": "3.4",
  "title": "Plotting with Seaborn",
  "body": " Plotting with Seaborn  For this section, you should be able to find the seaborn-plotting-introduction.ipynb notebook in the demo directory of the course environment folder.   "
},
{
  "id": "week-01-scikit-learn",
  "level": "1",
  "url": "week-01-scikit-learn.html",
  "type": "Section",
  "number": "3.5",
  "title": "Introduction to Scikit-Learn",
  "body": " Introduction to Scikit-Learn  For this section, you should be able to find the introduction-to-scikit-learn.ipynb notebook in the demo directory of the course environment folder.   "
},
{
  "id": "week-04-linear-regression-introduction",
  "level": "1",
  "url": "week-04-linear-regression-introduction.html",
  "type": "Section",
  "number": "4.1",
  "title": "What is Linear Regression?",
  "body": " What is Linear Regression?   Let’s consider a practical example. Suppose you’re curious about whether wealth influences happiness, so you decide to explore the relationship between a country’s GDP per capita and its citizens’ life satisfaction. To do this, you download the Better Life Index data from the OECD’s website and GDP per capita statistics from the IMF’s website. After merging these datasets, you plot the data for several randomly selected countries.  The relationship between life satisfaction and GDP per capita   The relationship between life satisfaction and GDP per capita.   Looking at the plot, you observe a noticeable trend. Despite the data being somewhat noisy, it appears that life satisfaction tends to increase more or less linearly as a country’s GDP per capita rises. Given this observation, you decide to model life satisfaction as a linear function of GDP per capita. Let’s denote life satisfaction by and GDP per capita by . This gives us a linear model to work with.   This model has two model parameters, and . By tweaking these parameters, you can make your model represent any linear function, as shown in .   A few possible linear models   A few possible linear models.    Before you can use your linear model, you need to determine the values for the parameters and . But how do you know which values will allow your model to perform optimally? To answer this, you must define a performance measure . You can either establish a utility function (also known as a fitness function ) to measure how well your model performs, or you can define a cost function to assess how poorly it performs. In linear regression problems, the cost function typically measures the distance between the model's predictions and the actual training examples, with the goal being to minimize this distance.  This is where the Linear Regression algorithm comes into play. You provide it with your training data, and it identifies the parameters that best fit the linear model to your data—a process known as training the model. In this particular case, the algorithm determines that the optimal parameter values are and .   The linear model that fits the training data best   The linear model that fits the training data best.    With these parameter values, you’re now ready to use the model to make predictions. For example, if you want to estimate the life satisfaction of people in Cyprus and the OECD data doesn’t provide this information, you can use your model to make a prediction. You would look up Cyprus’s GDP per capita, which is $22,587, and then apply your model: , resulting in a predicted life satisfaction score of approximately 5.96.  More generally, a linear model makes predictions by calculating a weighted sum of the input features, plus a constant known as the bias term (or intercept term). This relationship is expressed mathematically as: where is the predicted value, is the number of features, is the -th feature value, is the -th model parameter, and .   Note that is the model’s parameter vector, containing the bias term and the feature weights . And is the instance’s feature vector, containing with always equal to 1.   "
},
{
  "id": "figure-gdp-life-satisfaction",
  "level": "2",
  "url": "week-04-linear-regression-introduction.html#figure-gdp-life-satisfaction",
  "type": "Figure",
  "number": "4.1.1",
  "title": "",
  "body": " The relationship between life satisfaction and GDP per capita   The relationship between life satisfaction and GDP per capita.   "
},
{
  "id": "figure-linear-models",
  "level": "2",
  "url": "week-04-linear-regression-introduction.html#figure-linear-models",
  "type": "Figure",
  "number": "4.1.2",
  "title": "",
  "body": " A few possible linear models   A few possible linear models.   "
},
{
  "id": "week-04-linear-regression-introduction-6",
  "level": "2",
  "url": "week-04-linear-regression-introduction.html#week-04-linear-regression-introduction-6",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "performance measure utility function fitness function cost function "
},
{
  "id": "week-04-linear-regression-introduction-7",
  "level": "2",
  "url": "week-04-linear-regression-introduction.html#week-04-linear-regression-introduction-7",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "training "
},
{
  "id": "figure-best-fit-linear-model",
  "level": "2",
  "url": "week-04-linear-regression-introduction.html#figure-best-fit-linear-model",
  "type": "Figure",
  "number": "4.1.3",
  "title": "",
  "body": " The linear model that fits the training data best   The linear model that fits the training data best.   "
},
{
  "id": "week-04-linear-regression-introduction-10",
  "level": "2",
  "url": "week-04-linear-regression-introduction.html#week-04-linear-regression-introduction-10",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "bias intercept "
},
{
  "id": "linear-regression-note-1",
  "level": "2",
  "url": "week-04-linear-regression-introduction.html#linear-regression-note-1",
  "type": "Note",
  "number": "4.1.4",
  "title": "",
  "body": " Note that is the model’s parameter vector, containing the bias term and the feature weights . And is the instance’s feature vector, containing with always equal to 1.  "
},
{
  "id": "week-04-the-normal-equation",
  "level": "1",
  "url": "week-04-the-normal-equation.html",
  "type": "Section",
  "number": "4.2",
  "title": "The Normal Equation",
  "body": " The Normal Equation   Now that we’ve introduced the Linear Regression model, the next step is to train it. Training a model involves adjusting its parameters so that it best fits the training data. To do this, we need a way to measure how well—or how poorly—the model fits the data.  For regression problems, a common performance measure is the Root Mean Square Error (RMSE) . RMSE provides an estimate of the typical error made by the model in its predictions, with larger errors being penalized more heavily. This makes RMSE particularly useful, as it gives more weight to significant errors, offering a clear picture of the model's overall accuracy.  The RMSE is calculated by taking the square root of the average of the squared differences between the predicted values and the actual values in the training set. Mathematically, it is expressed as: where is the number of instances in the dataset you are measuring the RMSE on, is the predicted value for -th instance and is its label, i.e., the desired output value for that instance.   If we denote and , then RMSE corresponds to the Euclidean norm (also called norm), which is the Euclidean distance between and .    There are other measures, such as Mean Absolute Error (MAE) , and it corresponds to the norm:    The higher the norm index, the more it focuses on large values and neglects small ones. This is why the RMSE is more sensitive to outliers than the MAE. But when outliers are exponentially rare, the RMSE performs very well and is generally preferred.   Without loss of generality, let’s choose RMSE as the performance measure of a regression model, namely, the cost function of model. To train a Linear Regression model, you need to find the value of that minimizes the RMSE. In practice, it is simpler to minimize the Mean Square Error (MSE) than the RMSE, and it leads to the same result.   To find the value of that minimizes the cost function, there is a closed-form solution— in other words, a mathematical equation that gives the result directly. This is called the Normal Equation . where is a matrix containing all the feature values (excluding labels) of all instances in the dataset. There is one row per instance and the -th row is equal to the transpose of , i.e. .  Then the question ensues: The Normal Equation may not work if the matrix is not invertible, such as if or if some features are redundant. Practically, we use the pseudoinverse of (specifically the Moore-Penrose inverse), denoted by , to replace in Eq , which yields .  The pseudoinverse itself is computed using a standard matrix factorization technique called Singular Value Decomposition (SVD) that can decompose the training set matrix into the matrix multiplication of three matrices . The pseudoinverse is computed as . To compute the matrix , the algorithm takes and sets to zero all values smaller than a tiny threshold value, then it replaces all the non-zero values with their inverse, and finally it transposes the resulting matrix. This approach is more efficient and robust than computing the Normal Equation.  Performing linear regression using Scikit-Learn is quite simple: from sklearn.linear_model import LinearRegression lin_reg = LinearRegression() lin_reg.fit(X, y) lin_reg.intercept_, lin_reg.coef_ lin_reg.predict(X_new)    The LinearRegression class is based on the SVD approach. Both the Normal Equation and the SVD approach get very slow when the number of features grows large. On the positive side, both are linear with regards to the number of instances in the training set, so they handle large training sets efficiently, provided they can fit in memory.   "
},
{
  "id": "week-04-the-normal-equation-4",
  "level": "2",
  "url": "week-04-the-normal-equation.html#week-04-the-normal-equation-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Root Mean Square Error (RMSE) "
},
{
  "id": "linear-regression-note-2",
  "level": "2",
  "url": "week-04-the-normal-equation.html#linear-regression-note-2",
  "type": "Note",
  "number": "4.2.1",
  "title": "",
  "body": " If we denote and , then RMSE corresponds to the Euclidean norm (also called norm), which is the Euclidean distance between and .   "
},
{
  "id": "week-04-the-normal-equation-7",
  "level": "2",
  "url": "week-04-the-normal-equation.html#week-04-the-normal-equation-7",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Mean Absolute Error (MAE) "
},
{
  "id": "linear-regression-note-3",
  "level": "2",
  "url": "week-04-the-normal-equation.html#linear-regression-note-3",
  "type": "Note",
  "number": "4.2.2",
  "title": "",
  "body": " The higher the norm index, the more it focuses on large values and neglects small ones. This is why the RMSE is more sensitive to outliers than the MAE. But when outliers are exponentially rare, the RMSE performs very well and is generally preferred.  "
},
{
  "id": "week-04-the-normal-equation-10",
  "level": "2",
  "url": "week-04-the-normal-equation.html#week-04-the-normal-equation-10",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Normal Equation "
},
{
  "id": "week-04-the-normal-equation-12",
  "level": "2",
  "url": "week-04-the-normal-equation.html#week-04-the-normal-equation-12",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Singular Value Decomposition "
},
{
  "id": "linear-regression-note-4",
  "level": "2",
  "url": "week-04-the-normal-equation.html#linear-regression-note-4",
  "type": "Note",
  "number": "4.2.3",
  "title": "",
  "body": " The LinearRegression class is based on the SVD approach. Both the Normal Equation and the SVD approach get very slow when the number of features grows large. On the positive side, both are linear with regards to the number of instances in the training set, so they handle large training sets efficiently, provided they can fit in memory.  "
},
{
  "id": "week-04-gradient-descent",
  "level": "1",
  "url": "week-04-gradient-descent.html",
  "type": "Section",
  "number": "4.3",
  "title": "Gradient Descent",
  "body": " Gradient Descent   Now, let’s explore various methods to train a Linear Regression model, particularly useful when dealing with a large number of features or when the training dataset is too extensive to fit into memory.     How Does Gradient Descent Work?   Gradient Descent is a versatile optimization algorithm capable of finding optimal solutions to many problems. The core idea of Gradient Descent is to iteratively adjust parameters to minimize a cost function. This involves measuring the local gradient of the error function with respect to the parameter vector and moving in the direction of the descending gradient. The process continues until the gradient becomes zero, indicating a minimum has been reached.  The process of Gradient Descent starts with random initialization of , filling it with random values. The parameters are then gradually improved by taking small steps to reduce the cost function (e.g., the Mean Squared Error, MSE) until convergence to a minimum is achieved.  A critical parameter in Gradient Descent is the learning rate , which determines the size of each step. If the learning rate is too small, the algorithm will take many iterations to converge, resulting in a lengthy process. Conversely, if the learning rate is too large, the algorithm might overshoot the minimum, potentially leading to divergence where values become increasingly large and fail to find an optimal solution. Additionally, not all cost functions resemble smooth, regular bowls; they might have irregular terrains with holes, ridges, and plateaus, making convergence challenging.  However, the MSE cost function for Linear Regression is a convex function , meaning any line segment joining two points on the curve never crosses the curve itself. This implies the absence of local minima, with only one global minimum. Moreover, it is a continuous function with a consistent slope, ensuring that Gradient Descent will approach the global minimum.  The MSE cost function resembles a bowl shape, though it can become elongated if features have different scales. The figure below illustrates Gradient Descent on two training sets: one where features are on the same scale (left) and another where feature 1 has much larger values than feature 2 (right).   Gradient Descent with (left) and without (right) feature scaling   Gradient Descent with (left) and without (right) feature scaling.    On the left, Gradient Descent heads straight toward the minimum, achieving it quickly. On the right, it initially moves almost orthogonally to the direction of the global minimum, eventually making a prolonged descent down an almost flat valley. Though it will reach the minimum, this process takes considerably longer.  This example highlights the importance of feature scaling in Gradient Descent. By ensuring features have similar scales, the algorithm converges more efficiently, avoiding the pitfalls of elongated cost function shapes.   When using Gradient Descent, you should ensure that all features have a similar scale (e.g., using Scikit-Learn’s StandardScaler class), or else it will take much longer to converge.     Batch Gradient Descent  To implement Gradient Descent, you need to compute the gradient of the cost function with regards to each model parameter . In other words, you need to calculate how much the cost function will change if you change just a little bit, which is the partial derivative . We can compute the partial derivative of the cost function with respect to parameter :   Instead of computing these partial derivatives individually, you can use compute them all in one go using linear algebra. The gradient vector, denoted , contains all the partial derivatives of the cost function.   The gradient vector points \"uphill\", so once you calculate it, just go in the opposite direction to go towards the minimum. This means subtracting from . This is where the learning rate comes into play: multiply the gradient vector by to determine the size of the step:   You may wonder how to set the number of iterations. If it is too low, you will still be far away from the optimal solution when the algorithm stops, but if it is too high, you will waste time while the model parameters do not change anymore. A simple solution is to set a very large number of iterations but to interrupt the algorithm when the gradient vector becomes tiny, that is, when its norm becomes smaller than a tiny number (called the tolerance )—because this happens when Gradient Descent has (almost) reached the minimum.    Stochastic Gradient Descent  The primary drawback of Batch Gradient Descent is that it requires using the entire training set to compute the gradients at each step. This can make the algorithm quite slow, especially when dealing with large datasets. In contrast, Stochastic Gradient Descent (SGD) takes a different approach by selecting a random subset from the training set at each step and computing the gradient based solely on that subset. This method is significantly faster because it only processes a small amount of data per iteration. Moreover, SGD's efficiency allows it to handle enormous training sets, as it only needs to keep a subset of the dataset in memory at any given time.  However, the randomness inherent in SGD leads to less smooth convergence compared to Batch Gradient Descent. Instead of steadily decreasing towards the minimum, the cost function in SGD fluctuates, decreasing on average but bouncing up and down. While SGD will get close to the minimum, it typically never settles completely, as it continues to oscillate around it. This randomness, while a drawback in terms of precision, can actually be beneficial in certain situations. When the cost function has multiple local minima, SGD's stochastic nature can help the algorithm escape these traps and move towards the global minimum, which is a significant advantage over Batch Gradient Descent.  To balance the benefits of randomness with the need for convergence, a common technique is to gradually reduce the learning rate over time. Initially, larger steps help the algorithm make rapid progress and escape any local minima, but as the learning rate decreases, the steps become smaller, allowing the algorithm to hone in on the global minimum. This process is similar to simulated annealing , a technique inspired by the physical process of slowly cooling molten metal to reduce defects. The rate at which the learning rate decreases is governed by a learning schedule . If the learning rate drops too quickly, the algorithm might get stuck in a local minimum or halt progress prematurely. Conversely, if the learning rate decreases too slowly, the algorithm may continue to jump around the minimum for an extended period, potentially leading to a suboptimal solution if training is stopped too soon.  To perform Linear Regression using SGD with Scikit-Learn, you can use the SGDRegressor class, which defaults to optimizing the MSE cost function. The following code runs for maximum 1000 epochs ( max_iter=1000 ) or until the loss drops by less than 1e-3 during one epoch ( tol=1e-3 ), starting with a learning rate of 0.1 ( eta0=0.1 ), using the default learning schedule—inverse scaling ( learning_rate='invscaling' ), and it does not use any regularization ( penalty=None ): from sklearn.linear_model import SGDRegressor sgd_reg = SGDRegressor(max_iter=1000, tol=1e-3, penalty=None, eta0=0.1) sgd_reg.fit(X, y)    "
},
{
  "id": "standard-gradient-descent-2",
  "level": "2",
  "url": "week-04-gradient-descent.html#standard-gradient-descent-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Gradient Descent "
},
{
  "id": "standard-gradient-descent-3",
  "level": "2",
  "url": "week-04-gradient-descent.html#standard-gradient-descent-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "random initialization "
},
{
  "id": "standard-gradient-descent-4",
  "level": "2",
  "url": "week-04-gradient-descent.html#standard-gradient-descent-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "learning rate "
},
{
  "id": "standard-gradient-descent-5",
  "level": "2",
  "url": "week-04-gradient-descent.html#standard-gradient-descent-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "convex function "
},
{
  "id": "figure-gradient-descent-feature-scaling",
  "level": "2",
  "url": "week-04-gradient-descent.html#figure-gradient-descent-feature-scaling",
  "type": "Figure",
  "number": "4.3.1",
  "title": "",
  "body": " Gradient Descent with (left) and without (right) feature scaling   Gradient Descent with (left) and without (right) feature scaling.   "
},
{
  "id": "standard-gradient-descent-9",
  "level": "2",
  "url": "week-04-gradient-descent.html#standard-gradient-descent-9",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "feature scaling "
},
{
  "id": "linear-regression-note-5",
  "level": "2",
  "url": "week-04-gradient-descent.html#linear-regression-note-5",
  "type": "Note",
  "number": "4.3.2",
  "title": "",
  "body": " When using Gradient Descent, you should ensure that all features have a similar scale (e.g., using Scikit-Learn’s StandardScaler class), or else it will take much longer to converge.  "
},
{
  "id": "batch-gradient-descent-2",
  "level": "2",
  "url": "week-04-gradient-descent.html#batch-gradient-descent-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "partial derivative "
},
{
  "id": "batch-gradient-descent-5",
  "level": "2",
  "url": "week-04-gradient-descent.html#batch-gradient-descent-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "tolerance "
},
{
  "id": "stochastic-gradient-descent-2",
  "level": "2",
  "url": "week-04-gradient-descent.html#stochastic-gradient-descent-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Stochastic Gradient Descent (SGD) "
},
{
  "id": "stochastic-gradient-descent-4",
  "level": "2",
  "url": "week-04-gradient-descent.html#stochastic-gradient-descent-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "simulated annealing learning schedule "
},
{
  "id": "week-04-polynomial-regression",
  "level": "1",
  "url": "week-04-polynomial-regression.html",
  "type": "Section",
  "number": "4.4",
  "title": "Polynomial Regression",
  "body": " Polynomial Regression  What if your data is actually more complex than a simple straight line? Surprisingly, you can actually use a linear model to fit nonlinear data. A simple way to do this is to add powers of each feature as new features, then train a linear model on this extended set of features. This technique is called Polynomial Regression.   Let’s look at an example. First, let’s generate some nonlinear data, based on a simple quadratic equation (plus some noise; see ): m = 100 X = 6 * np.random.rand(m, 1) - 3 y = 0.5 * X**2 + X + 2 + np.random.randn(m, 1)   Generated nonlinear and noisy dataset   Generated nonlinear and noisy dataset.     Clearly, a straight line will never fit this data properly. So let’s use Scikit-Learn’s PolynomialFeatures class to transform our training data, adding the square (2nd-degree polynomial) of each feature in the training set as new features (in this case there is just one feature): from sklearn.preprocessing import PolynomialFeatures poly_features = PolynomialFeatures(degree=2, include_bias=False) X_poly = poly_features.fit_transform(X)  X_poly now contains the original feature of X plus the square of this feature. More concretely, the model structure now takes the form . Now you can fit a LinearRegression model to this extended training data ( ): lin_reg = LinearRegression() lin_reg.fit(X_poly, y) lin_reg.intercept_, lin_reg.coef_   Polynomial Regression model predictions   Polynomial Regression model predictions.     Note that when there are multiple features, Polynomial Regression is capable of finding relationships between features (which is something a plain Linear Regression model cannot do). This is made possible by the fact that PolynomialFeatures also adds all combinations of features up to the given degree. For example, if there were two features and , PolynomialFeatures with degree=3 would not only add the features and , but also the combinations and .    "
},
{
  "id": "figure-quadratic-data",
  "level": "2",
  "url": "week-04-polynomial-regression.html#figure-quadratic-data",
  "type": "Figure",
  "number": "4.4.1",
  "title": "",
  "body": " Generated nonlinear and noisy dataset   Generated nonlinear and noisy dataset.   "
},
{
  "id": "figure-polynomial-predictions",
  "level": "2",
  "url": "week-04-polynomial-regression.html#figure-polynomial-predictions",
  "type": "Figure",
  "number": "4.4.2",
  "title": "",
  "body": " Polynomial Regression model predictions   Polynomial Regression model predictions.   "
},
{
  "id": "linear-regression-note-6",
  "level": "2",
  "url": "week-04-polynomial-regression.html#linear-regression-note-6",
  "type": "Note",
  "number": "4.4.3",
  "title": "",
  "body": " Note that when there are multiple features, Polynomial Regression is capable of finding relationships between features (which is something a plain Linear Regression model cannot do). This is made possible by the fact that PolynomialFeatures also adds all combinations of features up to the given degree. For example, if there were two features and , PolynomialFeatures with degree=3 would not only add the features and , but also the combinations and .  "
},
{
  "id": "week-04-overfitting-and-underfitting",
  "level": "1",
  "url": "week-04-overfitting-and-underfitting.html",
  "type": "Section",
  "number": "4.5",
  "title": "Overfitting and Underfitting",
  "body": " Overfitting and Underfitting  If you perform high-degree Polynomial Regression, you will likely fit the training data much better than with plain Linear Regression. For example, applies a 300-degree polynomial model to the preceding training data, and compares the result with a pure linear model and a quadratic model (second-degree polynomial). Notice how the 300-degree polynomial model wiggles around to get as close as possible to the training instances.   High-degree Polynomial Regression   High-degree Polynomial Regression.     When working with models like Polynomial Regression, it’s important to balance the complexity of the model to avoid two key pitfalls: overfitting and underfitting. Overfitting occurs when a model is too complex and captures the noise in the training data, leading to excellent performance on the training set but poor generalization to new data. Underfitting, on the other hand, happens when the model is too simple to capture the underlying patterns in the data, resulting in poor performance on both the training and test sets.  In the case of a high-degree Polynomial Regression model, it may fit the training data almost perfectly but fail to generalize to unseen data, demonstrating overfitting. Conversely, a linear model might be too simplistic to capture the data’s structure, leading to underfitting. In this specific example, a quadratic model strikes the right balance, fitting the data well without being overly complex.  However, in practice, you won’t know the true function that generated the data, so determining the appropriate model complexity is challenging. To address this, you need to estimate how well your model will generalize to new data. The most reliable way to assess this is by testing the model on new, unseen cases.  One approach to evaluate generalization performance is to deploy the model in a real-world setting and monitor its performance over time. However, this method is risky—if the model performs poorly, it could lead to user dissatisfaction or other negative outcomes.  A safer and more common approach is to split your dataset into two parts: a training set and a test set . You train your model on the training set and then evaluate its performance on the test set. The error rate on the test set gives you an estimate of the model’s generalization error , or out-of-sample error . This metric indicates how well your model is likely to perform on data it has not encountered before.  If your model performs well on the training data but poorly on the test data, it’s a sign of overfitting. Conversely, if the model struggles on both the training and test sets, it’s likely underfitting. By carefully evaluating your model’s performance on the test set, you can fine-tune its complexity to achieve the best possible generalization to new data.  To split your data into training set and test set with Scikit-Learn, you can use the function train_test_split() in the module model_selection . The following code picks 20% of the dataset data randomly and set them in test_set , remaining in train_set .  from sklearn.model_selection import train_test_split train_set, test_set = train_test_split(data, test_size=0.2, random_state=42)  "
},
{
  "id": "figure-high-degree-polynomials",
  "level": "2",
  "url": "week-04-overfitting-and-underfitting.html#figure-high-degree-polynomials",
  "type": "Figure",
  "number": "4.5.1",
  "title": "",
  "body": " High-degree Polynomial Regression   High-degree Polynomial Regression.   "
},
{
  "id": "week-04-overfitting-and-underfitting-9",
  "level": "2",
  "url": "week-04-overfitting-and-underfitting.html#week-04-overfitting-and-underfitting-9",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "training set test set generalization error out-of-sample error "
},
{
  "id": "week-04-linear-regression-regularization",
  "level": "1",
  "url": "week-04-linear-regression-regularization.html",
  "type": "Section",
  "number": "4.6",
  "title": "Regularization",
  "body": " Regularization   Regularization is a technique used to simplify a model and minimize the risk of overfitting by introducing constraints during the learning process. Overfitting occurs when a model becomes too complex and starts to capture the noise in the training data, leading to poor generalization on new data. Regularization addresses this by imposing penalties on the model’s complexity, encouraging it to remain simpler and more generalizable.  The degree of regularization is controlled by a hyperparameter . Unlike model parameters, which are learned during the training process, hyperparameters are set before training begins and remain fixed throughout. The regularization hyperparameter determines the strength of the constraint applied to the model. If set too high, the model may become too simple, potentially underfitting the data by failing to capture essential patterns.  In the context of linear models, regularization is typically applied by constraining the model’s weights. This can be achieved through various methods, each with its own approach to applying these constraints. We will now look at Ridge Regression, Lasso Regression, and Elastic Net, which implement three different ways to constrain the weights.    Ridge Regression   Ridge Regression (also called Tikhonov regularization) is a regularized version of Linear Regression: a regularization term equal to is added to the cost function. This forces the learning algorithm to not only fit the data but also keep the model weights as small as possible. Note that the regularization term should only be added to the cost function during training. Once the model is trained, you want to use the unregularized performance measure to evaluate the model’s performance.   It is quite common for the cost function used during training to be different from the performance measure used for testing. Apart from regularization, another reason they might be different is that a good training cost function should have optimization-friendly derivatives, while the performance measure used for testing should be as close as possible to the final objective.   The hyperparameter controls how much you want to regularize the model. If , then Ridge Regression is just Linear Regression. If is very large, then all weights end up very close to zero and the result is a flat line going through the data’s mean. presents the Ridge Regression cost function. Note that the bias term is not regularized.   A linear model (left) and a polynomial model (right), both with various levels of Ridge regularization   A linear model (left) and a polynomial model (right), both with various levels of Ridge regularization.     shows several Ridge models trained on some linear data using different values. On the left, plain Ridge models are used, leading to linear predictions. On the right, the data is first expanded using PolynomialFeatures(degree=10) , then it is scaled using a StandardScaler , and finally the Ridge models are applied to the resulting features: this is Polynomial Regression with Ridge regularization. Note how increasing leads to flatter (i.e., less extreme, more reasonable) predictions, thus reducing the model’s variance but increasing its bias.  To perform Ridge Regression with Scikit-Learn, use the following code: from sklearn.linear_model import Ridge ridge_reg = Ridge(alpha=1) ridge_reg.fit(X, y)   If you want to perform Ridge Regression using Stochastic Gradient Descent, use the following code: from sklearn.linear_model import SGDRegressor sgd_reg = SGDRegressor(penalty=\"l2\") sgd_reg.fit(X, y)     Lasso Regression    Least Absolute Shrinkage and Selection Operator Regression (usually simply called Lasso Regression ) is another regularized version of Linear Regression: just like Ridge Regression, it adds a regularization term to the cost function, but it uses the norm of the weight vector instead of half the square of the norm.   An important characteristic of Lasso Regression is that it tends to eliminate the weights of the least important features (i.e., set them to zero).  To perform Lasso Regression with Scikit-Learn, use the following code: from sklearn.linear_model import Lasso lasso_reg = Lasso(alpha=0.1) lasso_reg.fit(X, y)    Note that you could instead use SGDRegressor(penalty=\"l1\") if you want to perform stochastic gradient descent with Lasso regularization instead of batch gradient descent.     Elastic Net    Elastic Net is a middle ground between Ridge Regression and Lasso Regression. The regularization term is a simple mix of both Ridge and Lasso’s regularization terms, and you can control the mix ratio . When , Elastic Net is equivalent to Ridge Regression, and when , it is equivalent to Lasso Regression.   To perform Elastic Net with Scikit-Learn, use the following code: from sklearn.linear_model import ElasticNet elastic_net = ElasticNet(alpha=0.1, l1_ratio=0.5) elastic_net.fit(X, y)     Which Regularization do I Use?  When deciding which regression method to use—whether plain Linear Regression, Ridge Regression, Lasso Regression, or Elastic Net—it’s important to consider the nature of your data and the specific problem you’re trying to solve. Here’s a breakdown of when to use each method:  Plain Linear Regression :  When to Use : Rarely recommended, as it doesn’t include any regularization to prevent overfitting.  Why Avoid : Without regularization, the model may overfit the training data, especially when the dataset has a large number of features or if the features are noisy.    Ridge Regression (L2 Regularization) :  When to Use : A good default choice when you suspect that most features are useful, or when you want to prevent overfitting by penalizing large coefficients.  Why Use : Ridge Regression helps spread the influence across features more evenly, which is particularly useful when you have many features, all of which may contribute to the prediction.    Lasso Regression (L1 Regularization) :  When to Use : Preferable when you believe that only a few features are truly relevant, and you want to perform automatic feature selection by driving the weights of less important features to zero.  Why Use : Lasso can create a sparse model by eliminating irrelevant features, making it easier to interpret and reducing the complexity of the model.    Elastic Net (Combination of L1 and L2 Regularization) :  When to Use : A strong choice when you have many features and suspect that only a subset are relevant, especially if the features are highly correlated or if the number of features exceeds the number of training instances.  Why Use : Elastic Net combines the benefits of Ridge and Lasso Regression, providing more flexibility and stability. It tends to perform better in situations where Lasso might struggle, such as when features are correlated or when there are more features than observations.      By considering the characteristics of your dataset and the goals of your model, you can select the most appropriate regression technique to achieve optimal performance.   "
},
{
  "id": "regularization-introduction-2",
  "level": "2",
  "url": "week-04-linear-regression-regularization.html#regularization-introduction-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "hyperparameter "
},
{
  "id": "ridge-regression-3",
  "level": "2",
  "url": "week-04-linear-regression-regularization.html#ridge-regression-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "regularization term "
},
{
  "id": "linear-regression-note-7",
  "level": "2",
  "url": "week-04-linear-regression-regularization.html#linear-regression-note-7",
  "type": "Note",
  "number": "4.6.1",
  "title": "",
  "body": " It is quite common for the cost function used during training to be different from the performance measure used for testing. Apart from regularization, another reason they might be different is that a good training cost function should have optimization-friendly derivatives, while the performance measure used for testing should be as close as possible to the final objective.  "
},
{
  "id": "figure-ridge-regularization",
  "level": "2",
  "url": "week-04-linear-regression-regularization.html#figure-ridge-regularization",
  "type": "Figure",
  "number": "4.6.2",
  "title": "",
  "body": " A linear model (left) and a polynomial model (right), both with various levels of Ridge regularization   A linear model (left) and a polynomial model (right), both with various levels of Ridge regularization.   "
},
{
  "id": "lasso-regression-3",
  "level": "2",
  "url": "week-04-linear-regression-regularization.html#lasso-regression-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Lasso Regression "
},
{
  "id": "linear-regression-note-8",
  "level": "2",
  "url": "week-04-linear-regression-regularization.html#linear-regression-note-8",
  "type": "Note",
  "number": "4.6.3",
  "title": "",
  "body": " Note that you could instead use SGDRegressor(penalty=\"l1\") if you want to perform stochastic gradient descent with Lasso regularization instead of batch gradient descent.  "
},
{
  "id": "elastic-net-3",
  "level": "2",
  "url": "week-04-linear-regression-regularization.html#elastic-net-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Elastic Net "
},
{
  "id": "appendix-ai-use-policy",
  "level": "1",
  "url": "appendix-ai-use-policy.html",
  "type": "Appendix",
  "number": "A",
  "title": "AI Use Policy",
  "body": " AI Use Policy   AI tools may be used in this course only according to the label attached to the activity or problem. The label text carries the meaning; colors or icons are only visual aids.   Course labels    AI Not Permitted : complete the marked work without AI assistance.    AI Not Permitted. Students must complete the marked work without AI assistance.      AI Debugging Only : AI may help you understand error messages or ask guiding questions, but it may not generate a full solution.    AI Debugging Only. Students may use AI to understand errors, diagnose problems, and ask guiding questions, but not generate a full solution.      AI Permitted with Disclosure : AI may be used as a tutor or coding assistant if you disclose its use and understand the submitted work.    AI Permitted with Disclosure. Students may use AI as a tutor or coding assistant, but must disclose its use and understand the submitted work.       Required disclosure Every submitted notebook must answer whether AI was used, what tool was used, what purpose it served, which problems were affected, the relevant prompt or conversation excerpt, and what you changed, verified, or rejected from the AI output.  Responsibility Disclosure does not excuse incorrect or poorly understood work. You are responsible for understanding and being able to explain every piece of code and writing that you submit.  "
},
{
  "id": "appendix-ai-use-policy-4-2-1-1",
  "level": "2",
  "url": "appendix-ai-use-policy.html#appendix-ai-use-policy-4-2-1-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "AI Not Permitted "
},
{
  "id": "appendix-ai-use-policy-4-2-2-1",
  "level": "2",
  "url": "appendix-ai-use-policy.html#appendix-ai-use-policy-4-2-2-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "AI Debugging Only "
},
{
  "id": "appendix-ai-use-policy-4-2-3-1",
  "level": "2",
  "url": "appendix-ai-use-policy.html#appendix-ai-use-policy-4-2-3-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "AI Permitted with Disclosure "
},
{
  "id": "appendix-troubleshooting",
  "level": "1",
  "url": "appendix-troubleshooting.html",
  "type": "Appendix",
  "number": "B",
  "title": "Troubleshooting",
  "body": " Troubleshooting   Setup problems    Confirm that you are in the course project folder before running uv sync or uv run jupyter lab .    Copy the exact error message when asking for help.    If JupyterLab opens in the wrong folder, stop it and relaunch from the course project folder.      Notebook problems    If Python says a name is not defined, check whether the cell that creates that variable has been run.    If output looks stale, restart the kernel and rerun the notebook from the top.    If a plot does not appear, check that the plotting cell ran and that it calls plt.show() when needed.      Standard Programming Tips   If something isn't behaving the way you expect, try putting \"print\" statements into your code to track what the different variables are doing. That is usually helpful in helping you pinpoint where the code is doing something that you don't expect.  If you can, work through the process by hand on a simple example and then see if the computer is getting the same results. This can be tedious, but it's very helpful to compare what the answer should be with what the computer variables have stored.  Throughout the course, you'll develop and practice the ability to \"think like the computer\". That is, you'll learn how to walk yourself through the code the same way the computer runs it. This \"thinking mode\" will help you spot errors. Just remind yourself to think \"What does this line of code do? What does the next line of code do?\". When you're trying to \"think like a computer\" to debug your code, you want to think about what the computer is actually doing, not what you want it to do at each step. A large part of programming is holding both of those things in mind at the same time: \"What do I want this line of code to do?\" and \"What does this line of code actually do?\" When those two questions don't have the same answer, you have a problem (a \"bug\" in computer science talk).     When asking for help It's fine to ask me or your classmates for help, but asking for programming help can be a little tricky. If you don't give the person (or AI) helping you enough information, they won't be able to help you effectively. Here are some tips for asking for help:  Copy the exact error message  Give all the relevant cells that are causing the issue  Let me know what you've tried so far  There are two main types of issues you'll come across while programming for numerical analysis:  Code errors: your code crashes, produces an error of some kind. These errors are errors with the actual written lines of code. You aren't giving valid instructions to the computer or you are trying to do something that code wasn't designed to handle (dividing by zero for example).  Math errors: your code runs fine without errors, etc. but it gives you incorrect output. These errors mean your code is functional, it's just not \"doing the right thing\".  This is an important distinction because it helps others know whether this is an error with syntax (getting your correct idea into the programming language correctly) or an error with your idea or algorithm.  If your error is a math error, state what the expected output is and what the actual output is. This can help narrow down the issue.  Sometimes what look like math errors are actually code errors so the above aren't hard and fast rules. Sometimes python is silently doing something you don't expect and that causes code which runs fine but doesn't give the right answer. All that to say \"debugging\" (that is, fixing code which isn't working) almost always takes longer than writing it in the first place. This is very typical so expect that fixing your code will be part of the process. That also means we might need to have a back and forth exchange because some of it is experimentation about where the error might be.    "
},
{
  "id": "appendix-author-ai-disclosure",
  "level": "1",
  "url": "appendix-author-ai-disclosure.html",
  "type": "Appendix",
  "number": "C",
  "title": "Author AI-Use Disclosure",
  "body": " Author AI-Use Disclosure  This document was prepared by Nicholas S. Moore, PhD with assistance from AI tools for drafting, editing, formatting, and checking course materials. The instructor reviewed the final content and remains responsible for the mathematical explanations, examples, policies, and instructional decisions.  "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
