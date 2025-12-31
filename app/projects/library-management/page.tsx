"use client";

import { classNames } from "@/components/styles";
import Image from "next/image";

export default function LibraryManagementPage() {
    return (
        <div className="container mx-auto px-6 py-4 text-white">
            <header className="text-center my-12">
                <h1
                    className={`text-5xl font-extrabold ${classNames.textGlowEffect}`}
                >
                    Library Management System
                </h1>
                <p className="text-lg text-gray-400 mt-4">
                    A comprehensive CLI-based solution for efficient library
                    operations.
                </p>
            </header>
            <Image
                src="../projects/library_management.png"
                alt="Library Management"
                height={200}
                width={600}
                className={`rounded-4xl mx-auto mt-10 border-4 border-purple-500/50 shadow-lg shadow-purple-500/20 ${classNames.textGlowEffect} hover:border-purple-500`}
            />

            <div
                className={`bg-gray-900/50 p-8 rounded-lg shadow-lg border border-purple-500/30 my-10 ${classNames.boxHoverEffect}`}
            >
                <h2
                    className={`text-3xl font-bold mb-6 ${classNames.spanText} ${classNames.textGlowEffect}`}
                >
                    Project Overview
                </h2>
                <p className="text-lg text-gray-300 leading-relaxed">
                    The Library Management System is a robust console-based
                    application developed in Python, designed to streamline and
                    automate the essential functions of a library. Born out of a
                    passion for organization and efficiency, this project serves
                    as a powerful tool for librarians to manage their book
                    inventory and member activities without the need for a
                    graphical user interface. Its lightweight and fast nature
                    makes it ideal for environments where performance and
                    simplicity are paramount.
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-10 my-10">
                <div
                    className={`bg-gray-900/50 p-6 rounded-lg shadow-lg border border-purple-500/30 ${classNames.boxHoverEffect}`}
                >
                    <h3
                        className={`text-2xl font-semibold mb-4 ${classNames.spanText} ${classNames.textGlowEffect}`}
                    >
                        Core Functionalities
                    </h3>
                    <ul
                        className={`space-y-3 text-gray-300 ${classNames.cardparent_list}`}
                    >
                        <li>
                            <span className={classNames.cardparent_list_span}>
                                Book Management:
                            </span>{" "}
                            Easily add, update, search, and delete books from
                            the inventory. Each book is tracked with a unique
                            ID, title, author, and quantity.
                        </li>
                        <li>
                            <span className={classNames.cardparent_list_span}>
                                Member Management:
                            </span>{" "}
                            Maintain a database of library members, including
                            their contact information and borrowing history.
                        </li>
                        <li>
                            <span className={classNames.cardparent_list_span}>
                                Issue & Return Books:
                            </span>{" "}
                            Seamlessly handle the process of issuing books to
                            members and processing returns, with automatic
                            updates to inventory levels.
                        </li>
                        <li>
                            <span className={classNames.cardparent_list_span}>
                                Inventory Control:
                            </span>{" "}
                            Keep a real-time count of available books and get
                            alerts for low stock, ensuring popular books are
                            always available.
                        </li>
                        <li>
                            <span className={classNames.cardparent_list_span}>
                                Search & Discovery:
                            </span>{" "}
                            A powerful search feature allows librarians and
                            members to find books quickly by title or author.
                        </li>
                    </ul>
                </div>

                <div
                    className={`bg-gray-900/50 p-6 rounded-lg shadow-lg border border-purple-500/30 ${classNames.boxHoverEffect}`}
                >
                    <h3
                        className={`text-2xl font-semibold mb-4 ${classNames.spanText} ${classNames.textGlowEffect}`}
                    >
                        Technical Deep Dive
                    </h3>
                    <p className="text-gray-300 mb-4">
                        The application is built entirely in Python, leveraging
                        fundamental data structures and programming concepts.
                    </p>
                    <ul
                        className={`space-y-3 text-gray-300 ${classNames.cardparent_list}`}
                    >
                        <li>
                            <span className={classNames.cardparent_list_span}>
                                Data Structures:
                            </span>{" "}
                            Utilizes dictionaries and lists to efficiently store
                            and manage data for books and members in memory,
                            aallowing for rapid access and modification.
                        </li>
                        <li>
                            <span className={classNames.cardparent_list_span}>
                                Command-Line Interface (CLI):
                            </span>{" "}
                            The user interface is designed to be intuitive and
                            easy to navigate, with clear prompts and a
                            structured menu system built using simple print and
                            input statements.
                        </li>
                        <li>
                            <span className={classNames.cardparent_list_span}>
                                Modular Design:
                            </span>{" "}
                            The code is organized into logical functions,
                            separating concerns and making the application easy
                            to maintain and extend with new features.
                        </li>
                        <li>
                            <span className={classNames.cardparent_list_span}>
                                Data Persistence:
                            </span>{" "}
                            While the base version uses in-memory data, the
                            architecture is designed to be easily adaptable for
                            future enhancements like file handling (CSV, JSON)
                            or database integration (MySQL) for persistent data
                            storage.
                        </li>
                    </ul>
                </div>
            </div>

            <div
                className={`bg-gray-900/50 p-8 rounded-lg shadow-lg border border-purple-500/30 my-10 ${classNames.boxHoverEffect}`}
            >
                <h2
                    className={`text-3xl font-bold mb-6 ${classNames.spanText} ${classNames.textGlowEffect}`}
                >
                    Detailed Project Description: Unleashing the Power of CLI
                    Library Management
                </h2>
                <p className="text-lg text-gray-300 leading-relaxed mb-4">
                    The Library Management System is a meticulously crafted
                    command-line interface (CLI) application developed in
                    Python, designed from the ground up to revolutionize the way
                    libraries manage their vast collections and engage with
                    their patrons. This robust system offers an unparalleled
                    blend of efficiency, simplicity, and comprehensive
                    functionality, making it an indispensable tool for
                    librarians seeking to streamline their daily operations
                    without the overhead of a graphical user interface. Its core
                    strength lies in its ability to manage books, visitors, and
                    book issuance with precision and speed, all underpinned by a
                    reliable MySQL database for persistent data storage.
                </p>
                <h3
                    className={`text-2xl font-semibold mb-3 ${classNames.spanText}`}
                >
                    Book Management: The Heart of the Library
                </h3>
                <p className="text-base text-gray-300 leading-relaxed mb-3">
                    At the core of any library is its collection, and this
                    system provides a sophisticated suite of tools for managing
                    every aspect of the book inventory. Librarians can
                    effortlessly <strong>add new books</strong>, capturing
                    essential details such as title, author, genre, publication
                    year, and the per-day issue rate, along with the total
                    quantity available. Should any book details require
                    adjustment, the system facilitates{" "}
                    <strong>editing existing book records</strong> with ease,
                    ensuring accuracy across the entire catalog. A powerful{" "}
                    <strong>search functionality</strong> allows for rapid
                    retrieval of books based on various criteria, including
                    name, author, or genre, dramatically reducing search times.
                    Furthermore, the system offers a clear and concise{" "}
                    <strong>view of all books</strong> currently in the library,
                    complete with their availability status. Crucially, it
                    supports dynamic{" "}
                    <strong>updates to book availability</strong>, automatically
                    adjusting quantities when books are issued or returned. For
                    outdated or damaged items, the system enables the{" "}
                    <strong>removal of books from inventory</strong>, ensuring
                    the catalog remains current and relevant.
                </p>

                <h3
                    className={`text-2xl font-semibold mb-3 ${classNames.spanText}`}
                >
                    Visitor Management: Nurturing the Patron Relationship
                </h3>
                <p className="text-base text-gray-300 leading-relaxed mb-3">
                    Effective management of library patrons is paramount, and
                    the system offers robust features to facilitate this. New
                    library members can be swiftly <strong>registered</strong>,
                    with their name, phone number, email, and address securely
                    recorded. The system intelligently parses full names into
                    first, middle, and last names for enhanced data
                    organization. Just as with books,{" "}
                    <strong>visitor information can be edited</strong>, ensuring
                    that contact details and other relevant data remain
                    up-to-date. A dedicated{" "}
                    <strong>search function for visitors</strong> allows
                    librarians to locate specific patrons quickly. For
                    administrative oversight, a comprehensive{" "}
                    <strong>list of all registered visitors</strong> is readily
                    available, providing a complete overview of the
                    library&apos;s membership. In cases where a visitor no
                    longer uses the library&apos;s services, the system supports
                    the <strong>removal of visitors</strong>, with a built-in
                    safeguard to prevent deletion if they currently have books
                    on loan.
                </p>

                <h3
                    className={`text-2xl font-semibold mb-3 ${classNames.spanText}`}
                >
                    Book Issuance: A Seamless Borrowing Experience
                </h3>
                <p className="text-base text-gray-300 leading-relaxed mb-3">
                    The core interaction between books and visitors is handled
                    through a streamlined book issuance process. Librarians can
                    easily <strong>issue books to visitors</strong>, linking a
                    specific book to a patron. During issuance, the system
                    automatically <strong>records the issue date</strong>,
                    calculates an estimated <strong>return date</strong>, and
                    determines the <strong>price</strong> for the loan period
                    based on the book&apos;s daily rate. This process also
                    intelligently updates the `books_issued` count for the
                    visitor and decrements the `book_current_quantity` for the
                    book, maintaining real-time inventory accuracy. When a book
                    is returned, the system facilitates its{" "}
                    <strong>return</strong>, marking the issue as cleared and
                    updating the book&apos;s availability. All past and current
                    lending activities are captured, allowing for a detailed{" "}
                    <strong>view of the history of book issues</strong>,
                    providing valuable insights into borrowing patterns.
                </p>

                <h3
                    className={`text-2xl font-semibold mb-3 ${classNames.spanText}`}
                >
                    User Management (Admin): Securing and Controlling Access
                </h3>
                <p className="text-base text-gray-300 leading-relaxed mb-3">
                    For system administrators, the Library Management System
                    provides powerful tools to manage user accounts and roles,
                    ensuring secure and controlled access. Administrators can{" "}
                    <strong>add new system users</strong> (e.g., other admins,
                    staff members), defining their usernames, names, passwords,
                    roles, and any pertinent notes. The system includes a check
                    to prevent duplicate usernames. All system users can be{" "}
                    <strong>viewed</strong>, providing an oversight of who has
                    access and their designated roles. In cases of staff
                    changes, the system supports the{" "}
                    <strong>deletion of system users</strong>. The ability to{" "}
                    <strong>check user roles</strong> ensures that permissions
                    are correctly assigned and enforced. Furthermore,
                    administrators can{" "}
                    <strong>edit existing user details</strong>, including their
                    name, password, role, and notes, with the flexibility to
                    leave fields blank to retain current values. Internal helper
                    functions, `_load_users()` and `_save_users()`, manage the
                    persistence of user data to a `users.bin` file using
                    Python&apos;s `pickle` module, providing a simple yet
                    effective mechanism for storing user credentials.
                </p>
            </div>

            <div
                className={`bg-gray-900/50 p-8 rounded-lg shadow-lg border border-purple-500/30 my-10 ${classNames.boxHoverEffect}`}
            >
                <h2
                    className={`text-3xl font-bold mb-6 ${classNames.spanText} ${classNames.textGlowEffect}`}
                >
                    API & Method Reference: Unpacking the System&apos;s Core
                    Logic
                </h2>
                <p className="text-lg text-gray-300 leading-relaxed mb-4">
                    This section provides an in-depth breakdown of the Library
                    Management System&apos;s programmatic interface, detailing
                    each critical function available through its controllers.
                    Organized by their respective functional areas, these
                    methods expose the granular control and operational
                    capabilities that underpin the entire application.
                </p>

                {/* Admin Controller */}
                <h3
                    className={`text-2xl font-semibold mt-8 mb-3 ${classNames.spanText}`}
                >
                    Admin Controller
                    (`controllers/admin_controller/admin_controller.py`)
                </h3>
                <p className="text-base text-gray-300 leading-relaxed mb-3">
                    The `admin_controller.py` module houses functions
                    responsible for the secure management of system users. These
                    methods provide administrators with the tools necessary to
                    control access, define roles, and maintain user credentials
                    within the system.
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2 pl-4">
                    <li>
                        <strong>`add_users(username)`:</strong> This function is
                        invoked to onboard new administrative or staff users
                        into the system. It first performs a crucial check to
                        determine if the provided `username` already exists. If
                        the username is unique, the system then interactively
                        prompts the administrator to input the new user&apos;s
                        full name, a secure password, their designated role
                        (e.g., &apos;admin&apos;, &apos;staff&apos;), and any
                        additional descriptive notes. Upon successful collection
                        of this data, the new user&apos;s details are securely
                        appended to the `users.bin` file, ensuring persistent
                        storage.
                    </li>
                    <li>
                        <strong>`view_users()`:</strong> Designed for oversight,
                        this method allows administrators to comprehensively
                        review all registered users. It retrieves the list of
                        users from the `users.bin` file and then systematically
                        iterates through each user record, neatly printing their
                        `username`, `name`, `role`, and any associated `note`.
                        This provides a clear snapshot of current system access.
                    </li>
                    <li>
                        <strong>`delete_user(username)`:</strong> This function
                        facilitates the removal of a user from the system. When
                        a `username` is supplied, the method searches for the
                        corresponding user record. If found, the user&apos;s
                        entry is permanently removed, and a success message is
                        displayed. If the `username` does not match an existing
                        record, a &quot;not found&quot; message is returned,
                        preventing erroneous deletions.
                    </li>
                    <li>
                        <strong>`check_if_user(username)`:</strong> A utility
                        function that serves as a predicate for user existence.
                        It takes a `username` as input and efficiently queries
                        the stored user data. It returns `True` if a user with
                        that `username` is found, indicating their presence in
                        the system, and `False` otherwise.
                    </li>
                    <li>
                        <strong>`check_role(username)`:</strong> This method is
                        used to ascertain the authorization level of a specific
                        user. Given a `username`, it retrieves the assigned
                        `role` (e.g., &apos;admin&apos;, &apos;staff&apos;) for
                        that user. If the user exists, their role string is
                        returned; otherwise, `None` is returned, signifying that
                        the user was not found.
                    </li>
                    <li>
                        <strong>`edit_user(username_to_edit)`:</strong> This
                        powerful function enables administrators to modify the
                        details of an existing user. Upon providing a
                        `username_to_edit`, the system prompts for new values
                        for the user&apos;s name, password, role, and a
                        descriptive note. A key feature is its flexibility:
                        leaving any prompt blank ensures that the current value
                        for that specific field remains unchanged, allowing for
                        partial updates.
                    </li>
                    <li>
                        <strong>`_load_users()` (Internal):</strong> This is a
                        crucial internal helper function, prefixed with an
                        underscore to indicate its intended private use within
                        the module. Its primary responsibility is to safely load
                        the serialized list of user data from the `users.bin`
                        file using Python&apos;s `pickle` module. In scenarios
                        where the file does not exist or has become corrupted,
                        it gracefully returns an empty list, preventing
                        application crashes.
                    </li>
                    <li>
                        <strong>`_save_users(users_data)` (Internal):</strong>{" "}
                        Another internal helper function, `_save_users` is
                        dedicated to persisting the current state of user data.
                        It accepts `users_data` (typically a list of user
                        objects) and serializes this data into the `users.bin`
                        file using the `pickle` module, thereby ensuring that
                        all user modifications are securely saved across
                        application sessions.
                    </li>
                </ul>

                {/* Reception Controller - Book Management */}
                <h3
                    className={`text-2xl font-semibold mt-8 mb-3 ${classNames.spanText}`}
                >
                    Reception Controller: Book Management
                    (`controllers/reception_controller/book_controller.py`)
                </h3>
                <p className="text-base text-gray-300 leading-relaxed mb-3">
                    The `book_controller.py` module provides a comprehensive set
                    of functions for managing the library&apos;s physical
                    collection. These methods allow staff to maintain an
                    accurate and up-to-date catalog of all books, from
                    acquisition to eventual removal.
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2 pl-4">
                    <li>
                        <strong>
                            `add_book(connection, book_name, book_author,
                            book_genre, book_publication_year, book_issue_rate,
                            book_quantity)`:
                        </strong>{" "}
                        This function is fundamental for expanding the
                        library&apos;s collection. It requires a database
                        `connection` object and accepts detailed parameters for
                        a new book: `book_name`, `book_author`, `book_genre`,
                        `book_publication_year`, the `book_issue_rate` (cost per
                        day for borrowing), and `book_quantity` (the total
                        number of copies acquired). These details are then
                        meticulously inserted into the `books` table in the
                        MySQL database.
                    </li>
                    <li>
                        <strong>`edit_book(connection, book_id)`:</strong>{" "}
                        Designed for accuracy and maintenance, this function
                        allows for granular modification of an existing
                        book&apos;s details. Given a database `connection` and a
                        unique `book_id`, it first retrieves the book&apos;s
                        current information. The user is then presented with
                        options to select which specific field (e.g., name,
                        author, genre) they wish to alter. Upon selection, the
                        method prompts for the new value and updates the
                        corresponding record in the `books` table.
                    </li>
                    <li>
                        <strong>`find_book_information(connection)`:</strong>{" "}
                        This is a powerful discovery tool that enables users to
                        locate books efficiently. It takes a database
                        `connection` and allows searching based on various
                        user-defined criteria, such as partial `book_name` or
                        `book_author`. The function queries the database to
                        retrieve and display all matching book records,
                        facilitating quick access to desired titles.
                    </li>
                    <li>
                        <strong>`view_book_details(connection)`:</strong>{" "}
                        Providing a holistic overview of the library&apos;s
                        holdings, this method, given a database `connection`,
                        fetches and displays a neatly formatted list of all
                        books present in the `books` table. This output
                        typically includes all relevant details for each book,
                        offering an easy way to audit the entire collection.
                    </li>
                    <li>
                        <strong>
                            `update_book_availability(connection, book_id)`:
                        </strong>{" "}
                        Crucial for real-time inventory management, this
                        function updates the `book_current_quantity` for a
                        specific book. This is particularly vital when a book is
                        either returned by a visitor (increasing availability)
                        or declared lost/damaged (decreasing availability),
                        ensuring that the system&apos;s inventory reflects the
                        true count of accessible copies.
                    </li>
                    <li>
                        <strong>
                            `remove_book_from_library_inventory(connection,
                            book_id)`:
                        </strong>{" "}
                        This method handles the permanent deletion of a book
                        record from the `books` table. Requiring a database
                        `connection` and the `book_id` of the item to be
                        removed, it includes a critical safeguard: the system
                        checks to ensure that all copies of the book are
                        currently within the library (i.e., not issued out)
                        before allowing the deletion, preventing inconsistencies
                        in inventory and lending records.
                    </li>
                </ul>

                {/* Reception Controller - Issue Management */}
                <h3
                    className={`text-2xl font-semibold mt-8 mb-3 ${classNames.spanText}`}
                >
                    Reception Controller: Issue Management
                    (`controllers/reception_controller/issue_controller.py`)
                </h3>
                <p className="text-base text-gray-300 leading-relaxed mb-3">
                    The `issue_controller.py` module is dedicated to managing
                    the circulation of books, encompassing both the issuance and
                    return processes. These functions ensure accurate tracking
                    of borrowed items, financial calculations, and inventory
                    adjustments.
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2 pl-4">
                    <li>
                        <strong>
                            `create_issue(connection, visitor, book_id,
                            return_date)`:
                        </strong>{" "}
                        This is the primary function for initiating a book loan.
                        It requires a database `connection`, the `visitor`
                        object (representing the borrowing patron), the
                        `book_id` of the item being borrowed, and the
                        agreed-upon `return_date`. The function meticulously
                        calculates the total `price` for the loan duration based
                        on the book&apos;s daily issue rate. Furthermore, it
                        intelligently updates the `books_issued` count for the
                        specified `visitor` and decrements the
                        `book_current_quantity` for the `book_id`, maintaining a
                        precise, real-time inventory count.
                    </li>
                    <li>
                        <strong>`return_book(connection)`:</strong> This method
                        gracefully handles the process of a book being returned
                        to the library. Given a database `connection`, it
                        identifies the corresponding issue record. It then marks
                        the issue as `cleared`, sets the `return_date` to the
                        current date, and performs necessary updates to both the
                        `visitor` record (decreasing their `books_issued` count)
                        and the `book` record (incrementing its
                        `book_current_quantity`), fully reconciling the loan
                        transaction.
                    </li>
                </ul>

                {/* Visitor Controller */}
                <h3
                    className={`text-2xl font-semibold mt-8 mb-3 ${classNames.spanText}`}
                >
                    Visitor Controller
                    (`controllers/visitor_controller/visitor_controller.py`)
                </h3>
                <p className="text-base text-gray-300 leading-relaxed mb-3">
                    The `visitor_controller.py` module is singularly focused on
                    the management of library patrons. Its functions provide
                    tools for registering, modifying, locating, and auditing all
                    individuals who interact with the library.
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2 pl-4">
                    <li>
                        <strong>
                            `add_visitor(connection, visitor_name,
                            visitor_phone, visitor_email, visitor_address)`:
                        </strong>{" "}
                        This function is used to enroll new patrons into the
                        library system. It requires a database `connection` and
                        accepts the `visitor_name` (full name), `visitor_phone`,
                        `visitor_email`, and `visitor_address`. A notable
                        feature is its ability to parse the `visitor_name` into
                        distinct first, middle, and last names, enhancing data
                        granularity and search capabilities.
                    </li>
                    <li>
                        <strong>`edit_visitor(connection, visitor_id)`:</strong>{" "}
                        To ensure patron records remain accurate, this method
                        allows for the modification of an existing
                        visitor&apos;s details. Provided with a database
                        `connection` and the unique `visitor_id`, it enables
                        updates to any aspect of the patron&apos;s information,
                        from contact details to address.
                    </li>
                    <li>
                        <strong>`find_visitor_information(connection)`:</strong>{" "}
                        An essential utility for staff, this function, given a
                        database `connection`, facilitates the rapid location of
                        visitor records. It supports searching based on various
                        user-inputted terms and fields (e.g., name, phone
                        number), quickly retrieving and displaying relevant
                        patron data.
                    </li>
                    <li>
                        <strong>`view_visitor_details(connection)`:</strong> For
                        administrative review and auditing, this method, with a
                        database `connection`, presents a clearly formatted list
                        of all registered visitors. This allows for a
                        comprehensive overview of the library&apos;s patron
                        base.
                    </li>
                    <li>
                        <strong>
                            `remove_visitor(connection, visitor_uid)`:
                        </strong>{" "}
                        This function enables the permanent removal of a
                        patron&apos;s record from the `visitors` table. It
                        requires a database `connection` and the `visitor_uid`
                        of the patron to be deleted. A critical safety measure
                        is integrated: a visitor can only be removed if they
                        currently have no books issued to them, preventing
                        orphaned lending records and maintaining data integrity.
                    </li>
                </ul>
            </div>

            <div className="text-center my-12">
                <a
                    href="https://github.com/DakshSingh-GitHub/LibraryManagement" // Replace with actual link
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-block bg-purple-600 text-white font-semibold px-8 py-3 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:bg-purple-700 ${classNames.textGlowEffect}`}
                >
                    View on GitHub
                </a>
            </div>
        </div>
    );
}
