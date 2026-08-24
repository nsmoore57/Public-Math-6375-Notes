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
  "body": " Getting Started with Jupyter Notebooks   To start, we'll open a Jupyter Notebook and get familiar with the interface.   Imagine Jupyter Notebook as your personal science journal: you write notes, do calculations, and see results right away, all in one digital book. It’s perfect for numerical analysis because you can test ideas interactively, like trying different numbers in a formula and seeing the output instantly.    How to Open a .ipynb File  An .ipynb file is a file format associated with Jupyter Notebook. After you launch Jupyter Notebook (Check previous page if you do not know how), your web browser (like Chrome or Firefox) will open automatically, showing a list of files and folders in current work directory. It’s running on your computer, not the internet.  In the browser, click on your .ipynb file. It opens like a webpage you can edit!    Understanding the Interface and Running Code  Now that it’s open, let’s explore the screen together. It’s not complicated—think of it as a notebook with pages you can write on.  Manu Bar at the Top  File for saving or opening, Edit for copying, View to hide\/show parts, Insert to add sections, Cell to run things, Kernel to restart if something goes wrong (like turning off and on a calculator), and Help for tips.   Toolbar Just Below  Quick buttons! The floppy disk saves, the + adds a new section (cell), scissors cut, copy\/paste for cells, the play button runs code, the square stops running code, arrows restart, and a dropdown changes cell type (Code for programming, Markdown for notes).   Cells - The Main Part  These are like blank pages in your journal.  Code Cells: For writing instructions to the computer. They have \"[]:\" on the left—the brackets show if you've run it (e.g., [1]: means first time).  Markdown Cells: For writing text, like explanations. Use # for big headings, ## for smaller, italics, bold, or - for bullet lists.  When you click a cell, it gets a highlighted border.      Output Area  After running a code cell, results appear below.    Kernel  This is the \"brain\" running in the background. If code gets stuck (infinite loop?), go to Kernel > Restart.    How to Run Code   Click into a code cell—it turns highlighted.  Type a simple instruction, like print(\"Hello, world!\") . (Don’t worry, we’ll explain this soon!)  To run: Hold Shift and press Enter. (Or Ctrl + Enter to stay in the cell, or click the play button.)  Watch: The kernel thinks (asterisk in brackets), then shows output: 5. 5. If it’s your first run, it starts the kernel automatically.     "
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
