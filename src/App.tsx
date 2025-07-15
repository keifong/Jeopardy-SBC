import { useState, useEffect, useRef } from "react";
import MyCard from "./components/myCard";
import Points_Card from "./components/pointsCard";
import More_Menu from "./components/moreMenu";
import FullScreen from "./components/fullScreen";
import "./App.css";

function App() {
  const audioRef_cashRegister = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    audioRef_cashRegister.current = new Audio("/cashRegister.mp3");

    return () => {
      // stop audio if component unmounts
      audioRef_cashRegister.current?.pause();
      audioRef_cashRegister.current!.currentTime = 0;
    };
  }, []);

  

  const [teamPoints, setTeamPoints] = useState({
    ephesus: 0,
    smyrna: 0,
    pergamum: 0,
    thyatira: 0,
    sardis: 0,
    philadelphia: 0,
    laodicea: 0,
  });

  function getTeamColor(teamId: string) {
    const colors: { [key: string]: string } = {
      // ephesus: "rgb(0, 85, 72)",
      ephesus: "rgb(198, 0, 0)",
      smyrna: "rgb(255, 136, 0)",
      pergamum: "rgb(0, 155, 54)",
      thyatira: "rgb(160, 0, 168)",
      sardis: "rgb(0, 0, 0)",
      philadelphia: "rgb(0, 200, 231)",
      laodicea: "rgb(242, 255, 0)",
    };
    return colors[teamId] || "gray";
  };

  const editPoints = (teamId: keyof typeof teamPoints) => {
    const toAdd = Number(prompt("Value to add:")) || 0;
    const toSubtract = Number(prompt("Value to subtract:")) || 0;

    const newValue = teamPoints[teamId] + toAdd - toSubtract;

    setTeamPoints((prev) => ({...prev, [teamId]: newValue}));
    audioRef_cashRegister.current?.play();
  };


  return (
    <div id="div-main">
      <div id="header_area">
        <h6 style={{padding: '5px'}}>Jeopardy SBC Retreat 2025</h6>
        <div id="top_buttons">
          <More_Menu/>
          <FullScreen/>
        </div>

      </div>
      <div id="div-cards">
        <div className="card-group">
          <ul>
            <h3>
              Books of the Law<br></br>律法书
            </h3>
            <MyCard
              reward="100"
              question="Who wrote the Ten Commandments?
              谁定下了十诫？"
              answer="God 神 (Exo 出 31:18)"
            />
            <MyCard
              reward="200"
              question="What was Abram’s changed name and what did it mean?
              亚伯兰改名后的名字是什么？它有什么含义呢？"
              answer="Abraham means “father of many nations”.
              亚伯拉罕的意思是“万国之父”。(Gen 创 17:5)"
            />
            <MyCard
              reward="300"
              question="Why were the Israelites instructed not to go over their harvest till it was bare?
              以色列人为什么被告戒不应该把庄稼完全收割，直到一捆都没剩？"
              answer="The remaining harvest would be for the “sojourner, fatherless, and widow”.
              剩余的收成将留给“寄居者与孤儿寡妇”。(Deu 申 24:19–21)"
            />
            <MyCard
              reward="400"
              question="What are 3 out of 5 types of offerings stated in Leviticus?
              利未记中提到的 5 种祭品中有 3 种是什么？"
              answer="Burnt offering, grain offering, peace offering, sin offering, guilt offering
              燔祭、素祭、平安祭、赎罪祭、赎愆祭 (Lev 利 1–5)"
            />
            <MyCard
              reward="500"
              question="What were the fruits that the Israelite spies carried out of the promised land when they returned to the camp?
              当以色列探子从应许之地返回营地时，他们带走了什么果实？"
              answer="Grapes, pomegranates and figs
              葡萄、石榴和无花果 (Num 民 13:23)"
            />
          </ul>
        </div>
        <div className="card-group">
          <ul>
            <h3>
              Historical & Prophetic Books<br></br>历史和预言书
            </h3>
            <MyCard
              reward="100"
              question="How many days did the Israelites march around Jericho?
              以色列人绕耶利哥城多少天？"
              answer="7 days
              七天 (Jos 书 6:1–27)"
            />
            <MyCard
              reward="200"
              question="How was Haman punished for his attempt to annihilate the Jews in the book of Esther?
              在以斯帖记中，哈曼因试图消灭犹太人而受到怎样的惩罚？"
              answer="He was hanged on the gallows that he set up for Mordecai, Esther’s cousin.
              他被吊死在为以斯帖的堂哥末底改设立的绞刑架上。(Est 斯 4:16)"
            />
            <MyCard
              reward="300"
              question="What was the name of Ruth's great-grandson?
              路得的曾孙叫什么名字？"
              answer="King David 大卫王"
            />
            <MyCard
              reward="400"
              question="How long did it take for the walls of Jerusalem to be fully reconstructed in the book of Nehemiah?
              在尼希米记中，重建耶路撒冷的城墙花了多长时间?"
              answer="52 days 五十二天 (Neh 尼 6:15)"
            />
            <MyCard
              reward="500"
              question="In Revelation, when the mighty angel throws a great millstone into the sea, what does it symbolise?
              在启示录中，当一位大力的天使将一块大磨石扔进海里时，这象征着什么?"
              answer="The destruction of the great city of Babylon as punishment for their sin.
              巴比伦大城被毁灭，作为对他们罪孽的惩罚。(Rev 启 18:21)"
            />
          </ul>
        </div>
        <div className="card-group">
          <ul>
            <h3>
              Gospel Books<br></br>福音书
            </h3>
            <MyCard
              reward="100"
              question="What books of the Bible feature the feeding of the 5000?
              圣经中的哪些书记载了耶稣喂饱五千人的故事?"
              answer="The Gospels of Matthew, Mark, Luke and John
              马太福音、马克福音、路加福音、约翰福音."
            />
            <MyCard
              reward="200"
              question="In the Parable of the Good Samaritan, who walks past the injured Jewish man and who aids him?
              在好撒玛利亚人的比喻中，谁看见受伤的犹太人并从那边过去，而谁帮助了他?"
              answer="A priest and Levite walk past the man but a Samaritan rescues him and pays for his care.
              一个祭司和利未人走过他，但一个撒玛利亚人救了他并支付了他的治疗费用。 (Luk 路 10:25–37)"
            />
            <MyCard
              reward="300"
              question="What event in Jesus’ early life on Earth fulfilled Jeremiah’s prophecy?
              耶稣小时候时发生了什么，实现了耶利米的预言?"
              answer="Herod killed all the boys in Bethlehem and the surrounding region who were two years old or under in the hunt for Jesus, echoing the grief felt during Israel’s exile.
              希律王在追捕耶稣的过程中杀死了伯利恒和周边地区所有两岁​​或两岁以下的男孩。这与以色列流亡期间的悲痛感相呼应。(Mat 太 2:16–18)"
            />
            <MyCard
              reward="400"
              question="Who went to anoint the body of Jesus to prepare him for burial?
              谁膏抹了耶稣的身体，为他准备埋葬？"
              answer="Mary Magdalene, Mary the mother of James, and Salome
              抹大拉的玛利亚、雅各的母亲玛利亚和撒罗米 (Mak 可 16:1)"
            />
            <MyCard
              reward="500"
              question="Jesus appeared to his disciples after the resurrection beside which sea?
              耶稣复活后在哪个海边向他的门徒显现？"
              answer="The Sea of Galilee
              加利利海 (Jhn 约 21:1–17)"
            />
          </ul>
        </div>
        <div className="card-group">
          {/* <ul style={{alignItems: 'center', justifyItems: 'center'}}> */}
          <ul>
            <h3>
              Epistles & Books of Wisdom<br></br>书信与智慧书
            </h3>

            <MyCard
              reward="100"
              question="What is the fruit of the Spirit? List them all.
              圣灵所结的果子是什么？请一一列举."
              answer="Love, joy, peace, patience, kindness, goodness, faithfulness, gentleness and self-control
              仁爱、喜乐、和平、忍耐、恩慈、良善、信实、温柔、节制 (Gal 加 5:22–23)"
            />
            <MyCard
              reward="200"
              question="What is the purpose for the observance of the Lord's Supper?
              遵守主餐的目的是什么?"
              answer="In remembrance of Jesus’ sacrifice for us
              为了纪念耶稣为我们作出的牺牲 (1 Cor 林前 11:23–25)"
            />
            <MyCard
              reward="300"
              question="State the first verse in Psalms.
              列出诗篇的第一节"
              answer="Blessed is the man who walks not in the counsel of the wicked, nor stands in the way of sinners, nor sits in the seat of scoffers.
              不从恶人的计谋，不站罪人的道路，不坐亵慢人的座位，(...这人变为有福！) (Psm 诗 1:1)"
            />
            <MyCard
              reward="400"
              question="What were the names of Timothy’s mother and grandmother?
              提摩太的母亲和外婆的名字是什么?"
              answer="Eunice was his mother and Lois was his grandmother.
              友妮基是他的母亲，罗以是他的外婆。(2 Ti 提后 1:5)"
            />
            <MyCard
              reward="500"
              question="Lamentations 3 gives the title of a great and well-known hymn. Which hymn is it?
              耶利米哀歌第 3 章起了一首著名诗歌的标题。这指的是哪一首？"
              answer="Great Is Thy Faithfulness 你的信实广大"
            />
          </ul>
        </div>
        <div className="card-group">
          <ul>
            <h3>
              SBC’s Early History<br></br>教会的早期历史
            </h3>
            <MyCard
              reward="100"
              question="When was The Singapore Baptist Church founded?
              新加坡浸信教会成立于哪一年？"
              answer="1961"
            />
            <MyCard
              reward="200"
              question="Who were the first ordained deacons of our church?
              我们教会的第一任正式委任的执事是谁？"
              answer="Dn Goh Tiat Ming, Dn Ng Swan Yew and Dn Lee Yoke Sun
              吴哲民执事、黄允勋执事、李钰新执事"
            />
            <MyCard
              reward="300"
              question="What was established first: the children’s worship department, the Missions department or the English worship service department?
              先建立的是儿童敬拜部、宣教部还是英文崇拜部？"
              answer="The Missions department was established in 1975, with the other departments only being formed in 1993 and 1994 respectively.
              宣教部成立于 1975 年，其他部门分别于 1993 年和 1994 年成立。"
            />
            <MyCard
              reward="400"
              question="What is the inscription written on the foundation stone of our church building?
              我们礼拜堂的基石上刻的是什么？"
              answer='"Jesus Christ is the foundation of the Church.”
              “耶稣基督为教会之根基"'
            />
            <MyCard
              reward="500"
              question="From which organisation did our church loan from to purchase the land for our church building?
              我们的教会从哪个组织贷款买下教会现址?"
              answer="Southern Baptist Foreign Mission loan department
              西差会货款公司"
            />
          </ul>
        </div>
        <div className="card-group">
          <ul>
            <h3>
              In & Around the Church<br></br>教会内外
            </h3>
            <MyCard
              reward="100"
              question="Name 1 fruit we have grown in the church’s back garden.
              举一种在教会后花园种植的水果。"
              answer="Bananas 香蕉"
            />
            <MyCard
              reward="200"
              question="How many ceiling fans are there in the fellowship dining hall?
              教会餐厅里有几个风扇?"
              answer="6"
            />
            <MyCard
              reward="300"
              question="How many dining tables are there in the fellowship dining hall?
              教会餐厅里有几张餐桌？"
              answer="14"
            />
            <MyCard
              reward="400"
              question="How many official parking lots are there in the church (excluding those in Red Swastika)?
              教会停车场有几个停车位？(不包括红卐字会内的停车场）"
              answer="22"
            />
            <MyCard
              reward="500"
              question="What is the church mission statement?
              我们教会的使命是什么？"
              answer="Our mission is to glorify God by: Pleasing God, Obeying God’s commands, Proclaiming the Gospel of Jesus Christ, Holding fast to the Truth, Equipping the saints, Serving in unity and Loving one another.
              我们的使命是为荣耀真神：讨神喜悦、遵行神的命令、传扬福音、持守真道、装备信徒、同心事奉、彼此相爱."
            />
          </ul>
        </div>
        <div className="card-group">
          <ul>
            <h3>
              Church Members<br></br>会友
            </h3>
            <MyCard
              reward="100"
              question="Name 5 people whose first names start with R.
              举五个英文名以 R 开头的会友。"
              answer="You are right! 太棒了呀!"
            />
            <MyCard
              reward="200"
              question="Name 3 families with 3 children. (Can be adult children)
              列出三个有三名孩子的家庭。（可以是成年子女）"
              answer="You are right! 太棒了呀!"
            />
            <MyCard
              reward="300"
              question="Who is our church’s longest-serving pastor/reverend?
              我们教会任职时间最长的传道/牧师是谁？"
              answer="Pastor Chiow Siew Khim 萧秀琴传道"
            />
            <MyCard
              reward="400"
              question="Name every person in a group selected by spinning the wheel.
              通过旋转轮盘选出一组，然后列出每个组员的名字。"
              answer="You are right! 太棒了呀!"
            />
            <MyCard
              reward="500"
              question="Name 10 people who are attending church retreat whose first name starts with J.
              列出十名参加退修会，英文名以 J 开头的会友。"
              answer="You are right! 太棒了呀!"
            />
          </ul>
        </div>
      </div>
      <hr></hr>
      {/* end of div-cards */}
      <div id="div-points">
        <ul>
          {Object.entries(teamPoints).map(([teamId, points]) => (
            <li key={teamId} onClick={() => editPoints(teamId as keyof typeof teamPoints)} className="card-points"
              style={{
                backgroundColor: getTeamColor(teamId),
                color: teamId == "sardis" || teamId == "ephesus" || teamId == "thyatira" ? "white" : "black",
              }}
            >
              <Points_Card points={points} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
