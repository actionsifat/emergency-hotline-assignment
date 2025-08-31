<h1>Answer to the question number 06</h1>
    <h3>1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll?</h3>

    উত্তরঃ <ul>
        <li>getElementById দিয়ে নির্দিষ্ট id ওয়ালা element গুলারে ফেরত পাও্যা যায়, একটাই element এক্সেস করার জন্য।</li>
         <li>getElementsByClassName → একই class এর যতগুলো আছে সব element ফেরত দেয়, একাধিক element।</li>
         <li>querySelector → CSS selector দিয়ে প্রথম matching element গুলো কে পাওয়া যায়।</li>
         <li>querySelectorAll → CSS selector দিয়ে সব matching element গুলো কে পাওয়া যায়।</li>
    </ul>

     <h3>2. How do you create and insert a new element into the DOM?</h3>
    <ul>
        <li>প্রথমে DOM এ একটা নতুন element তৈরি করব, যেমন একটি div বা paragraph।</li>
        <li>তারপর সেই element এ content বা attribute যোগ করবো, যেমন, class বা id।</li>
        <li>শেষে আমরা এই নতুন element কে DOM এ কোথায় যোগ করতে চাই তা ঠিক করবো এবং parent element এর under এ insert করবো </li>
    </ul>

    <h3>3. What is Event Bubbling and how does it work? </h3>
    <ul>
        <li>Event Bubbling হলো এমন একটি সিস্টেম যেখানে কোনো child element এ যদি event trigger হয়, তাইলে সেই event এর  উপরের parent elements এর দিকে ধাপে ধাপে যেতে থাকবে।</li>
        <li>উদাহরণ: যদি একটি button click করি যা একটি div এর ভিতরে থাকে, প্রথমে button এর click event হইইয় , তারপর সেই div এর মধ্যে click এর event হয়।</li>
    </ul>

    <h3>4. What is Event Delegation in JavaScript? Why is it useful?</h3>
    <ul>
        <li>Event Delegation হলো এমন একটি টেকনিক যেখানে parent element এ event listener attach করা হয়, এবং সেই listener দিয়ে parent এর সব child element এর event handle করা হয়।</li>

        <li>সুবিধা: যদি page এ অনেক child element থাকে, তাইলে আমরা সব element এ আলাদা করে listener attach করতে পারবো না।</li>

        <li>Event Delegation ব্যবহার করলে নতুন child element add হলেও listener আবার attach করার দরকার হয় না। তাই ব্যবহার করাটা সুবিধাজনক হবে।</li>

    </ul>

    <h3>5. What is the difference between **preventDefault() and stopPropagation()** methods? </h3>
    <ul>
        <li>preventDefault() একটি method যা কোনো element এর default action বন্ধ করে দেয়। যেমন: link এ click করলে page reload হবে না, form submit হবে না।</li>
        <li>stopPropagation() হলো method যা event কে parent element পর্যন্ত যেতে দিবে না, মানে bubbling বন্ধ করে দিবে।</li>
        <li>দুইটির মধ্যে পার্থক্য: preventDefault default behavior বন্ধ করে দেয়, stopPropagation event কে উপরের দিকে যেতে দেয় না।</li>
    </ul>
