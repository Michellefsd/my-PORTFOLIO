
const subtitleLineHook = () => {
    setTimeout(() => {
        document.querySelectorAll("span.underlined").classList.add("underlined").classList.remove("animation-underlined")
    }, 1670);
    document.querySelectorAll("span.underlined").classList.add("animation-underlined").classList.remove("underlined")
};

export default subtitleLineHook;