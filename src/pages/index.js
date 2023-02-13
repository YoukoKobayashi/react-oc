import Layout from '../components/layout'
import Hero from '../components/hero'
import styles from '../styles/layout.module.scss'
import Btn from '@/components/btn'
import Animation from '../components/scrollAnimation'

export default function Home() {
  return (
    <Layout>
      <Hero
        title1="ミライの地図を"
        title2="手に入れよう"
        subtitle="open campus 2023"
        imageOn
      />

        <section id={styles.first}>
          <div className={styles.inner}>
            <div className={styles.wrap}>
              <div className={styles.wrapInnerMain}>
                <div className={styles.categoryTtl}>
                <div className={styles.categoryTtlInner}>
                  
                    <h2>
                      <span className={`${styles.categoryTtlUp} ${[u-animation-fadein]}`}>第1回 開催日</span>
                      <Animation>
                        <span className={`${styles.categoryTtlBottom} ${styles.fadeTypeSame}`}>2023年3月19日(日)10:00</span>
                      </Animation>
                    </h2>
                  </div>
                </div>
                <div className={styles.singleColumn}>
                <h3 className={`${styles.middleTtl} ${middleTtlLeftBarLarge}`}>対象</h3>
                  <p className={txt}>
                    新高校2、3年生とその保護者、既卒者とその保護者
                  </p>
                <h3 className={`${middleTtl} ${middleTtlLeftBarLarge}`}>
                    申し込み方法
                  </h3>
                  <p className={styles.txt}>申込フォームからの事前申し込みが必要です</p>
                  <h3 className={`${styles.middleTtl} ${styles.middleTtlLeftBarLarge}`}>申込受付</h3>
                  <p className={styles.txt}>2023年1月23日（月）12:00 受付開始</p>
                <h3 className={`${styles.middleTtl} ${styles.middleTtlLeftBarLarge}`}>
                    プログラム
                  </h3>
                  <p className={styles.txt}>プログラムの詳細は随時更新いたします</p>
                </div>
              </div>
              <div className={styles.wrapInnerSide}>
                  <span className={styles.sideRight}>
                    <span className={styles.sideRightTitleInner} datatext="O">
                      <span className={`${styles.sideRightTtitleInnerItem} ${[u-animation-fadein]}`}>O</span>
                    </span>
                    <span className={styles.sideRightTitleInner} datatext="P">
                      <span className={`${styles.sideRightTtitleInnerItem} ${[u-animation-fadein]}`}>P</span>
                    </span>
                    <span className={styles.sideRightTitleInner} datatext="E">
                      <span className={`${styles.sideRightTtitleInnerItem} ${[u-animation-fadein]}`}>E</span>
                    </span>
                    <span className={styles.sideRightTitleInner} datatext="N">
                      <span className={`${styles.sideRightTtitleInnerItem} ${[u-animation-fadein]}`}>N</span>
                    </span>
                    <span className={styles.sideRightTitleInner} datatext="C">
                      <span className={`${styles.sideRightTtitleInnerItem} ${[u-animation-fadein]}`}>C</span>
                    </span>
                    <span className={styles.sideRightTitleInner} datatext="A">
                      <span className={`${styles.sideRightTtitleInnerItem} ${[u-animation-fadein]}`}>A</span>
                    </span>
                    <span className={styles.sideRightTitleInner} datatext="M">
                      <span className={`${styles.sideRightTtitleInnerItem} ${[u-animation-fadein]}`}>M</span>
                    </span>
                    <span className={styles.sideRightTitleInner} datatext="P">
                      <span className={`${styles.sideRightTtitleInnerItem} ${[u-animation-fadein]}`}>P</span>
                    </span>
                    <span className={styles.sideRightTitleInner} datatext="U">
                      <span className={`${styles.sideRightTtitleInnerItem} ${[u-animation-fadein]}`}>U</span>
                    </span>
                    <span className={styles.sideRightTitleInner} datatext="S">
                      <span className={`${styles.sideRightTtitleInnerItem} ${[u-animation-fadein]}`}>S</span>
                    </span>
                  </span>
                </div>               
            </div>
            <div className={styles.btns}>
              <div className={styles.btnsItem}>
                  <a href="https://form.e-v-o.jp/oc/toin-3982" className={styles.btn}>申込フォームはこちら</a>
              </div>
            </div>
          </div>
        </section>

        <section id={styles.second}>
          <div className={styles.inner}>
            <div className={styles.triangleMainColor}></div>
            <div className={styles.singleColumn}>
              <p className={`${styles.txt} ${styles.ind} ${styles.mt32}`}>
                桐蔭横浜大学のいろんなことを、見て、聞いて、体感できるオープンキャンパス！<br />
                学部や学環で学べることを、模擬講義や機器体験、グループワークで体験、個別相談会で疑問や悩みを解消しましょう！<br />
                また学内ツアーや学生とのチャットスペースなど、大学のあらゆるスペースでさまざまなプログラムをご用意してお待ちしております。<br />
                新学年が始まる前に、ミライのこと、いっしょに考えませんか？
              </p>
            </div>
                <div className={styles.categoryTtl}>
                  <div className={`${styles.categoryTtlInner} ${[u-animation-fadein]}`}>
                    <h2>
                      <span className={`${styles.categoryTtlUp} ${styles.colorMain}`}>自分の「知りたい！」でChoiceできる</span>
                      <Animation>
                        <span className={`${styles.categoryTtlBottom} ${styles.colorMain} ${styles.fadeTypeSame}`}>プログラム</span>
                      </Animation>
                    </h2>
                  </div>
                </div>
          </div>
        </section>


        <section id={styles.third}>
          <div className={styles.inner}>
            <div className={styles.wrap}>
              <div className={styles.wrapInnerSide}>
                <span className={styles.sideLeft}>
                  <span className={styles.sideLeftTitleInner} datatext="P">
                    <span className={`${styles.sideLeftTitleInnerItem} ${[u-animation-fadein]}`}>P</span>
                  </span>
                  <span className={styles.sideLeftTitleInner} datatext="R">
                    <span className={`${styles.sideLeftTitleInnerItem} ${[u-animation-fadein]}`}>R</span>
                  </span>
                  <span className={styles.sideLeftTitleInner} datatext="O">
                    <span className={`${styles.sideLeftTitleInnerItem} ${[u-animation-fadein]}`}>O</span>
                  </span>
                  <span className={styles.sideLeftTitleInner} datatext="G">
                    <span className={`${styles.sideLeftTitleInnerItem} ${[u-animation-fadein]}`}>G</span>
                  </span>
                  <span className={styles.sideLeftTitleInner} datatext="R">
                    <span className={`${styles.sideLeftTitleInnerItem} ${[u-animation-fadein]}`}>R</span>
                  </span>
                  <span className={styles.sideLeftTitleInner} datatext="A">
                    <span className={`${styles.sideLeftTitleInnerItem} ${[u-animation-fadein]}`}>A</span>
                  </span>
                  <span className={styles.sideLeftTitleInner} datatext="M">
                    <span className={`${styles.sideLeftTitleInnerItem} ${u-animation-fadein}]`}>M</span>
                  </span>
                  <span className={styles.sideLeftTitleInner} datatext="S">
                    <span className={`${styles.sideLeftTitleInnerItem} ${[u-animation-fadein]}`}>S</span>
                  </span>
                </span>
              </div>
                <div className={styles.wrapInnerMain}>
                  <div className={styles.singleColumn}>
                  <h4 className={styles.itemTtl}>01.大学全体の説明</h4>
                  <h4 className={styles.itemTtl}>02.学部・学環の説明</h4>
                  <h4 className={styles.itemTtl}>03.個別相談会</h4>
                  <h4 className={styles.itemTtl}>04.学内ツアー</h4>
                  <h4 className={styles.itemTtl}>05.医療機器体験</h4>
                  <h4 className={styles.itemTtl}>06.実技体験</h4>
                  <h4 className={styles.itemTtl}>07.学生トーク</h4>
                  <h4 className={styles.itemTtl}>08.住まいの相談</h4>
                  <h4 className={styles.itemTtl}>09.住まいの相談</h4>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id={styles.forth}>
          <div className={styles.inner}>
            <div className={styles.triangleBaseColor3}></div>
            <div className={styles.singleColumn}>
              <img className={styles.pictureAsk} alt="新型コロナウイルス感染症予防のお願い" />
            </div>
          </div>
        </section>  
      <Btn />
    </Layout>
        
  )
}


