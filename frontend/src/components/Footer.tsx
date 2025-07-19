export default function Footer() {
    return (
        <div className="text-center mt-[1rem] border-t border-t-primary p-(--container-padding-mobile)">
            Ontwikkeld door{" "}
            <a
                className="text-primary"
                href="https://www.linkedin.com/in/evan-sahit-703598151/"
                target="_blank"
            >
                Evan Sahit
            </a>{" "}
            voor de <br />
            <span className="font-bold text-primary text-xl">
                Snappet Challenge
            </span>
        </div>
    );
}
