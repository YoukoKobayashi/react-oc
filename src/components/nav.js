import Link from "next/link";
import styles from "../styles/nav.module.css";

function Nav() {
	return (
		<nav>
			<ul className={styles.list}>
				<li>
					<Link href="/">イベント</Link>
				</li>
				<li>
					<Link href="/about">なんでも相談・質問</Link>
				</li>
				<li>
					<Link href="/about">全国進路相談会</Link>
				</li>
				<li>
					<Link href="/about">オンライン個別相談室</Link>
				</li>
				<li>
					<Link href="/about">個人見学・団体見学</Link>
				</li>
				<li>
					<Link href="/about">オープンキャンパス・レポート</Link>
				</li>
				<li>
					<Link href="/about">受験生応援サイトTOP</Link>
				</li>
				<li>
					<Link href="/about">大学サイトTOP</Link>
				</li>
			</ul>
		</nav>
	);
}
export default Nav;
