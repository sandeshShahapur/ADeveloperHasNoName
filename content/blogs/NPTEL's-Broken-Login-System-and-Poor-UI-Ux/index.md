---
title: "NPTEL's Broken Login System and Poor UI / UX"
date: 2025-01-28T19:17:58+05:30
author: "Sandesh Shahapur"
draft: false
summary: "NPTEL, a government-backed online education platform, suffers from a confusing login system, poor UI, and a frustrating course enrollment process. This article highlights the issues faced by students, from a broken authentication system to a non-responsive interface, and calls for much-needed improvements."
tags: ["NPTEL", "UI/UX", "Online Education", "Student Experience", "Government Websites"]
categories: ["Technology", "Education"]
---

NPTEL, the National Programme on Technology Enhanced Learning, is a project funded by the Indian Ministry of Education and initiated by IITs and IISc. [NPTEL](https://nptel.ac.in/) provides E-learning through online Web and Video courses in Engineering, Science and Humanities streams.

I recently had to enrol in an NPTEL course and was surprised by the poor {{< glossary term="ux" displayTerm="user experience" >}} on their website. The navigation is unintuitive, the {{< glossary term="UI" >}} is {{< glossary term="responsive" displayTerm="non-responsive" >}}, and the {{< glossary term="authentication" >}} system is outright broken. The frustrating and outdated system is not a standard to be expected from a government funded, [cutting-edge](https://web.archive.org/web/20240505163215/https://stories.nptel.ac.in/index.php/about/) educational platform.

## Enrolling in an NPTEL Course: A Frustrating Experience

I started at their [Courses](https://nptel.ac.in/courses/) page to find my desired course, which I [found](https://nptel.ac.in/courses/106106179). However, there was no clear “Enroll” button; only a “Log in” option and 'Swayam Certificate' option were visible. Assuming I needed to log in first, I clicked "Log in" and was directed to the [Login](https://archive.nptel.ac.in/noc/B2C/) page, which displayed the message: “Please make sure that you login using the same email id you had used while enrolling to the course.”

At this point, I hadn’t created an account yet, so I attempted to sign up. After filling in the required fields, I clicked “Create,” only to be redirected and be met with a bizarre error: “Your email id doesn’t match our records!” Below it was a “Logout” button which was confusing, since the sign up attempt seemed to have failed. Clicking it redirected me again, this time to an “{{< glossary term="authorization" displayTerm="Unauthorized" >}}“ error page. Now, I was stuck - unable to sign up, log in, log out or even try again.

Since I had an understanding of [how sessions work](http://localhost:1313/blogs/what-are-browser-http-cookies/#why-are-cookies-used), I cleared my browser {{< glossary term="cookie" displayTerm="cookies" >}} and tried logging in with the same id and password, thinking my account might have been created. But once again, I got the same “email id doesn’t match” error. I repeated this process multiple times with different email IDs and passwords on different days, but the issue persisted.

## The Unexpected SWAYAM Detour

After multiple failed attempts, I checked NPTEL’s [FAQ](https://nptel.ac.in/faq/) page. Under FAQ -> Online Courses -> "How do I enroll/register for an NPTEL online course?", I found that I was supposed to enroll through the [SWAYAM](https://swayam.gov.in/NPTEL) website. This was not indicated on the NPTEL course page, except for the button labelled 'Swayam Certificate' which new users might not understand such as myself, leading to confusion.

On SWAYAM, I attempted to [sign up](https://swayam.gov.in/wso?redirect=/) using the same ids I tried on NPTEL, only to receive yet another error: “A user with the specified ID already exists. Please choose a different one.” This suggests:

- The NPTEL and SWAYAM websites share the same {{< glossary term="database" >}}.
- My failed account creation on NPTEL still stored my credentials on this database.

This raises issues:

- Why does NPTEL’s login system exist if students are supposed to enroll via SWAYAM?
- Is the NPTEL login system abandoned/archived with lingering session issues?
- The course pages on NPTEL should have an explicit button for enrolling as new users will not realize that the 'Swayam Certificate' button is where they should click on.

After using a new username, I was finally able to register on SWAYAM and enroll in my course.

## A Non-Responsive UI

The UI on NPTEL for desktop is functional. However, on mobile it is not responsive which is through which most students access online content from.

- Up to 90% of Indian households do not own a computer (desktop PC, laptop etc. ) whereas over 95% of households own a mobile phone ([CAMS-mospi](https://www.mospi.gov.in/sites/default/files/publication_reports/CAMS%20Report_October_N.pdf)).
- Up to ~9% of Higher Education Institutions (considering all streams) in India lack a 'computer center' ([AISHE-s2waas](https://cdnbbsr.s3waas.gov.in/s392049debbe566ca5782a3045cf300a3c/uploads/2024/02/20240719952688509.pdf)).
- Up to ~ 80% of web traffic in India comes from mobile devices ([statcounter](https://gs.statcounter.com/platform-market-share/desktop-mobile-tablet/india/#monthly-202001-202501-bar)).

Below are some screenshots of the NPTEL website on mobile screen sizes with the issues highlighted (click on the images to view them in full size with the issues described):

{{< carousel numSlides="12" autoplay="0" >}}
    {{< slide
        src="anptel_home_collage.webp"
        desc="The menu is not responsive and the text is not readable. Additionally in the screen size of the left image, the button for expanding/collapsing menu items is non functional. In the screen size of right image, the banner for certification courses too is affected. While this is the home page of the archived section of the NPTEL website, there are redirects to it from the main NPTEL website. "
    >}}
    {{< slide
        src="nptel_home_scrollx_collage.webp"
        desc="The header overflows to the right which must be accessed through scrolling."
    >}}
    {{< slide
        src="nptel_slide_cards_collage.webp"
        desc="The card items (seen in the right items) overflow and get clipped. 2 of the 4 cards are neither visible nor scrollable. "
    >}}
    {{< slide
        src="nptel+_image_stretch.webp"
        desc="The image is shrunk, making the content unreadable."
    >}}
    {{< slide
        src="nptel_searchbox_text_clip.webp"
        desc="The text that tells what the search box is for is clipped, making it difficult to filter as the user doesn't know what the search box is for."
    >}}
    {{< slide
        src="nptel+_home.webp"
        desc="The menu in NPTEL Plus home page has bad colors and style. The menu layout does not appear simple."
    >}}
    {{< slide
        src="nptel+_header_img_jitter_collage.webp"
        desc="The left image shows the initial state of webpage load and when the page is scrolled (right image), the header image disappears which causes the content to jitter."
    >}}
    {{< slide
        src="nptel_faq.webp"
        desc="This is more a personal view, the default section of the FAQ page on page load, the 'General' section, made me think this was the only section available due to the footer being right below it which covers 100% of the width. I hadn't noticed the section list to the left side until a second visit to the page. Additionally the repetition of the 'Certification Examination' section is misnamed instead of 'SWAYAM Courses & NPTEL Courses' (in whose section there are further mistypings). Plus the answers for a question collapse when you click on the answer, why? I can't copy the text easily."
    >}}
    {{< slide
        src="nptel_bg_img_reso.webp"
        desc="The background image of footer has wrong dimensions and is stretched, making some text unreadable."
    >}}
    {{< slide
        src="nptel_card_overflow_scroll.webp"
        desc=" A minor issue where the last card overflows its container to the right."
    >}}
    {{< slide
        src="nptel_card_tag_overlay.webp"
        desc="Another minor issue where the tag on the card overlays on some part of the text."
    >}}
    {{< slide
        src="nptel_course.webp"
        desc="This is the front page of a course in NPTEL. As seen, there is no 'enroll' or 'register' button, neither is there an indication of what a new user should do to enrol in a course. The first thing a user sees is the 'Login' (problematic as explained) button at top right."
    >}}
{{< /carousel >}}

## The Exam Form and Spammy Email

To receive a certificate for the course, students must pay for and take an exam. The registration form redundantly asks for details already provided when enrolling in a course. Worse, when uploading a photo, signature, and ID proof, the system enforces an arbitrary minimum file size of 50KB. This makes no sense:

- If it’s about quality, check the image dimensions instead.
- If it’s about security, use proper validation rather than enforcing a file size range.

This may lead to students having to unnecessarily increase file size by adding padding or noise.

{{< figure src="swayam_exam_form_collage.webp" width="1457px" height="819px" alt="Exam Registration Form" caption="Exam Registration Form" loading="lazy" >}}

After partially filling the form but not submitting it or completing registration for the exam, I received multiple reminder emails to complete the payment. Worse, there was no option to unsubscribe.

## Conclusion: NPTEL Needs a UI / UX Fixing

NPTEL is a good initiative, but its platform especially for new users is disappointing. A government-backed educational platform should not have such usability flaws. At the very least, they should:

- Remove or properly integrate the NPTEL login system by fixing session handling and database inconsistencies.
- Clearly instruct students to use SWAYAM for enrollment on every course page by adding an explicit “Enroll” button.
- Improve mobile responsiveness.
- Stop sending spammy emails or provide an option to unsubscribe.

Until these issues are resolved, students will continue to struggle with a platform that is supposed to make learning accessible.
