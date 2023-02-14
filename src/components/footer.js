import Container from "./container";
import Nav from "./nav";
import styles from "../styles/footer.module.css";
import Social from "./social";

export default function Footer() {
	return (
		<>
			<footer id={styles.footer} className={styles.wrapper}>
				<Container>
					<div className={styles.flexContainer}>
						<div>
							<h3>桐蔭横浜大学</h3>
							<p>
								〒225-8503
								<br />
								神奈川県横浜市青葉区鉄町1614
							</p>
							<p>
								<a
									href="http://toin.ac.jp/univ/inquiry/"
									className={styles.icnExternalLink}
								>
									お問い合わせ
								</a>
							</p>
							<Social />
						</div>
						<Nav />
					</div>
					<small className={styles.copyRight}>&copy; 2023 toin gakuen</small>
				</Container>
			</footer>
		</>
	);
}
