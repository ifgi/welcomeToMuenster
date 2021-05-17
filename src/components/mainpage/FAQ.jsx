import { useState } from "react";
import { useSelector } from "react-redux";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Collapse from "react-bootstrap/Collapse";
import geo1LichthofImage from "../../img/geo_1_lichthof.jpg";

function FAQ() {
  const language = useSelector((state) => state.language);
  const [open, setOpen] = useState({
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
    6: false,
    7: false,
    8: false,
    9: false,
    10: false,
    11: false,
    12: false,
    13: false,
    14: false,
    15: false,
    16: false,
  });
  return (
    <>
      <Container id='FAQ'>
        <Row id='faq-row'>
          <Col xs='12' md='12'>
            <h2>
              {" "}
              {language === "german" ? (
                <>Das Wichtigste zuerst: Die meistgestelleten Fragen</>
              ) : language === "englisch" ? (
                <>First Things First: Frequency Asked Questions</>
              ) : (
                <></>
              )}
            </h2>
          </Col>
          <Col xs='12' md='12'>
            <Button
              variant='secondary'
              onClick={() =>
                setOpen({
                  ...open,
                  [1]: !open[1],
                })
              }
              aria-controls='example-collapse-text'
              aria-expanded={open}>
              {language === "german" ? (
                <>Ich habe Fragen zum Studium. Wo bekommen ich Antworten?</>
              ) : language === "englisch" ? (
                <>
                  I have got some questions regarding the studies. Where can I
                  get answers?
                </>
              ) : (
                <></>
              )}
            </Button>
            <Collapse in={open[1]}>
              <div>
                <div id='faq-1' className='faq-text'>
                  {language === "german" ? (
                    <>
                      <p>
                        Zunächsteinmal kann diese Seite hier vielleicht schon
                        ein paar deiner Fragen beantworten und alle
                        weiterführenden Links erledigen den Rest
                      </p>
                      <p>
                        Falls das dennoch nicht reichen sollte, hast du
                        verschieden Möglichkeiten an deine Antworten zu kommen.
                        Bei Fragen rund um das Studium kannst du dich immer bei
                        unseren{" "}
                        <a
                          href='https://www.uni-muenster.de/Geoinformatics/Studies/course_guideance/index.shtml'
                          rel='noreferrer'
                          target='_blank'>
                          Studienkoordinator_Innen
                        </a>{" "}
                        melden oder auch die{" "}
                        <a
                          href='https://geofs.uni-muenster.de/wp/'
                          rel='noreferrer'
                          target='_blank'>
                          Fachschaft
                        </a>{" "}
                        um Rat bitten. Hier wird von engagierten Studis immer
                        geholfen, egal welches Anliegen du hast.
                      </p>
                    </>
                  ) : language === "englisch" ? (
                    <>
                      <p>
                        First of all, this page should answer some of your
                        questions. If you then need any further information you
                        might check out all the pages that are linked here.
                      </p>
                      <p>
                        Further questions regarding your studies might be
                        answered by our institute's{" "}
                        <a
                          href='https://www.uni-muenster.de/Geoinformatics/Studies/course_guideance/index.shtml'
                          rel='noreferrer'
                          target='_blank'>
                          study coordinator
                        </a>
                        . Beside that, you also can contact the{" "}
                        <a
                          href='https://geofs.uni-muenster.de/wp/'
                          rel='noreferrer'
                          target='_blank'>
                          Fachschaft (student association)
                        </a>
                        . The engaged students will help you in any case, no
                        matter where you are stucked or what your problems are.
                      </p>
                    </>
                  ) : (
                    <></>
                  )}
                </div>
              </div>
            </Collapse>
          </Col>
          <Col xs='12' md='12'>
            <Button
              variant='secondary'
              onClick={() =>
                setOpen({
                  ...open,
                  [2]: !open[2],
                })
              }
              aria-controls='example-collapse-text'
              aria-expanded={open}>
              {language === "german" ? (
                <>Muss ich mich schon um Kursanmeldungen kümmmern?</>
              ) : language === "englisch" ? (
                <>Do I have to enroll for courses already?</>
              ) : (
                <></>
              )}
            </Button>
            <Collapse in={open[2]}>
              <div>
                <div id='faq-2' className='faq-text'>
                  <>
                    <p>
                      Um die Anmeldung von Kursen musst du dir erstmal keine
                      Sorgen machen. In der{" "}
                      <a
                        href='https://geofs.uni-muenster.de/wp/erstsemester/erstiwoche/'
                        rel='noreferrer'
                        target='_blank'>
                        Einführungswoche
                      </a>{" "}
                      wird dir alles zu deinem Stundenplan und dem
                      Buchungssystem für deine Kurse an der Uni erklärt.
                      Natürlich steht es dir immer offen, von dem empfohlenen
                      Kursen für das entsprechende Semester abzuweichen und
                      Kurse vorzuziehen oder in einem höheren Semester erst
                      durchzuführen.
                    </p>
                    <p>
                      {" "}
                      Dennoch ist es empfehlenswert gerade am Anfang des
                      Bachelors die Grundlagenkurse mitzumachen, da diese
                      wichtig für alle darauf aufbauenden Kurse sind. Fürs Erste
                      musst du dich also um nichts kümmern und kannst dich
                      entspannt auf die Ersti-Woche freuen.
                    </p>
                  </>
                </div>
              </div>
            </Collapse>
          </Col>
          <Col xs='12' md='12'>
            <Button
              variant='secondary'
              onClick={() =>
                setOpen({
                  ...open,
                  [3]: !open[3],
                })
              }
              aria-controls='example-collapse-text'
              aria-expanded={open}>
              {language === "german" ? (
                <>Was ist die Fachschaft?</>
              ) : language === "englisch" ? (
                <>What is the Fachschaft (student association)?</>
              ) : (
                <></>
              )}
            </Button>
            <Collapse in={open[3]}>
              <div>
                <div id='faq-2' className='faq-text'>
                  {language === "german" ? (
                    <>
                      <p>
                        Die Fachschaft Geoinformatik setzt sich aus freiwilligen
                        Studierenden der Geoinformatik zusammen, die deine
                        Interessen im Studium vertreten, in verschiedenen
                        Gremien der Uni aktiv teilnehmen und darüber hinaus dein
                        Ansprechpartner für Probleme bei allem rund ums Studium
                        sind.{" "}
                      </p>
                      <p>
                        Da Geoinformatik ein vergleichsweise kleiner Studiengang
                        ist, ist es relativ unkompliziert, Teil der Fachschaft
                        zu werden. Wer Interesse hat mitzuwirken, sollte am
                        besten direkten Kontakt aufnehemen. Neben der
                        Möglichkeit sich selbst an aktuellen Themen zu
                        beteiligen, lernt man Studierende aus allen Fachsemester
                        kennen und ist so optimal vernezt. Mehr Infos gibt es{" "}
                        <a
                          href='https://geofs.uni-muenster.de/wp/'
                          rel='noreferrer'
                          target='_blank'>
                          hier
                        </a>
                        .
                      </p>
                    </>
                  ) : language === "englisch" ? (
                    <>
                      <p>
                        The Geoinformatics Fachschaft (student council or
                        student association) is made up of voluntary students of
                        geoinformatics, who represent your interests in your
                        studies, actively participate in various committees of
                        the university and are also your contact for problems
                        related to your studies.
                      </p>
                      <p>
                        Since geoinformatics is a comparatively small degree
                        programme, it is relatively uncomplicated to become part
                        of the student association. If you are interested in
                        joining, it would be best to contact the student council
                        directly. In addition to the opportunity to participate
                        in current topics, you get to know students from all
                        semesters and thus you're optimally connected. For more
                        information click{" "}
                        <a
                          href='https://geofs.uni-muenster.de/wp/'
                          rel='noreferrer'
                          target='_blank'>
                          here
                        </a>
                        .
                      </p>
                    </>
                  ) : (
                    <></>
                  )}
                </div>
              </div>
            </Collapse>
          </Col>
          <Col xs='12' md='12'>
            <Button
              variant='secondary'
              onClick={() =>
                setOpen({
                  ...open,
                  [4]: !open[4],
                })
              }
              aria-controls='example-collapse-text'
              aria-expanded={open}>
              {language === "german" ? (
                <>Wie finanziere ich mein Studium?</>
              ) : language === "englisch" ? (
                <>How do I finance my studies?</>
              ) : (
                <></>
              )}
            </Button>
            <Collapse in={open[4]}>
              <div>
                <div id='faq-2' className='faq-text'>
                  {language === "german" ? (
                    <>
                      {" "}
                      <p>
                        Natürlich hat jede_r ihren/seinen eigenen Weg, das
                        Studium zu finanzieren. Der/Die Eine wird von den Eltern
                        supported, andere erhalten BAföG oder sogar ein
                        Stipendium und wieder andere jobben neben dem Studium.
                        Hier ist ein kleiner Überblick und weiterführende Links
                        zu diesem Thema:
                      </p>
                      <ul>
                        <li>
                          {" "}
                          BAföG ist eine gute Möglichkeit ein wenig finanzielle
                          Unterstützung zu kommen. Zwar muss man einen Teil des
                          Geldes, das man hier erhält am Ende zurückzahlen, aber
                          dennoch lohnt es sich. Die kleine bürokratische Hürde,
                          die durch ein mehrseitiges Formular überwunden werden
                          muss, mag einige abschrecken, daher gibt es online
                          einige Rechner, mit denen sich der erwartbare
                          BAföG-Credit abschätzen lässen, aber unabhängig davon,
                          sollte man eine Beantragung zumindest einmal versucht
                          haben. Für die aktuellen Regelungen und alle wichtigen
                          Formulare lies{" "}
                          <a
                            href='https://www.uni-muenster.de/studium/kosten/bafoeg.html'
                            rel='noreferrer'
                            target='_blank'>
                            hier
                          </a>{" "}
                          weiter.
                        </li>

                        <br />
                        <li>
                          Stipendien sollen besonders erfolgreiche und
                          engagierte Studierende unterstützen. Mit einer
                          monatlichen Auszahlung von häufigerweise 300€ können
                          sich Stipendant_Innen glücklich schätze. Wer der
                          Gefühl hat, die Chance auf ein Stipendium zu erhalten
                          kann sich{" "}
                          <a
                            href='https://www.uni-muenster.de/studium/kosten/stipendien.html'
                            rel='noreferrer'
                            target='_blank'>
                            hier
                          </a>{" "}
                          über die verschiedenen Angebote informieren.
                        </li>
                        <br />
                        <li>
                          Jobs, gerade für Studierende, finden sich in Münster
                          zu Hauf. Ob an der Universität oder dem Institut
                          selbst, bei einer der ansässigen geoinformatischen
                          Unternehmen oder als Minijobber in allen Bereichen,
                          jeder der Arbeit sucht, wird sie hier finden. Stellen
                          an der Uni werden oft an schwarzen Brettern, den
                          Newsletter der Fachschaft oder im Insitut verbreitet.
                          Beispielsweise wurde diese Homepage von einen
                          Studenten neben seinem Studium erstellt. Auch
                          Stellenangebote der örtlichen Firmen werden über die
                          gerade genannten Kanäle veröffentlicht. Schau hierfür
                          gerne auf das schwarze Brett im Geo Gebäude. Für
                          anderweitige Jobs lohnt es sich oft bei interessanten
                          Läden oder Firmen offen nachzufragen oder du schaust
                          durch Stellenanzeigen wie beispielweise in der{" "}
                          <a
                            href='https://www.nadann.de/'
                            target='_blank'
                            rel='noreferrer'>
                            na dann ...
                          </a>
                          , die jeden Mittwoch auch als kostenloses Heft in
                          Münsters Straßen ausliegt.
                        </li>
                      </ul>
                    </>
                  ) : language === "englisch" ? (
                    <>
                      <p>
                        Of course, everyone has his/her own way of financing
                        his/her studies. Some are supported by their parents,
                        others receive a scholarship or ERASMUS, and others work
                        alongside their studies. Here is a short overview and
                        further links on this topic if you still do not know how
                        to financiate your time in Münster:
                      </p>
                      <ul>
                        <li>
                          {" "}
                          You probably know about your chances of getting a
                          ERASMUS or any other scholarship. If not, you can
                          check out the website of the{" "}
                          <a
                            href='https://www.uni-muenster.de/InternationalOffice/'
                            rel='noreferrer'
                            target='_blank'>
                            International Office
                          </a>{" "}
                          who may help you in this matter.
                        </li>
                        <br />

                        <br />
                        <li>
                          <p>
                            If your are interested in working alongside your
                            studies then you have many options in Münster.
                          </p>
                          <p>
                            First you may check if the ifgi has got vacancies.
                            For example this homepage was build by a student
                            alongside his studies. There is a noticeboard at the
                            GEO building displaying jobs like this or vacancies
                            of local geoinformation companies. Other jobs may be
                            found for example in the{" "}
                            <a
                              href='https://www.nadann.de/'
                              target='_blank'
                              rel='noreferrer'>
                              na dann ...
                            </a>{" "}
                            a free magazine that is laid out every wednesday in
                            the streets of Münster.
                          </p>
                        </li>
                      </ul>
                    </>
                  ) : (
                    <></>
                  )}
                </div>
              </div>
            </Collapse>
          </Col>
          <Col xs='12' md='12'>
            <Button
              variant='secondary'
              onClick={() =>
                setOpen({
                  ...open,
                  [5]: !open[5],
                })
              }
              aria-controls='example-collapse-text'
              aria-expanded={open}>
              {language === "german" ? (
                <>Wie finde ich eine Wohung oder eine WG?</>
              ) : language === "englisch" ? (
                <>How do I find a nice flat or flat-sharing?</>
              ) : (
                <></>
              )}
            </Button>
            <Collapse in={open[5]}>
              <div>
                <div id='faq-2' className='faq-text'>
                  {language === "german" ? (
                    <>
                      <p>
                        Der Wohnungsmarkt in Münster ist sehr angespannt und
                        gerade für diejenigen, die neu hierherkommen und nicht
                        das üppigste Portmonaie besitzen, ist es manchmal schwer
                        eine Unterkunft zu finden. Wohnungen werden auf
                        bekannten Immobilien-Webseiten angeboten, liegen aber
                        häufig außerhalb des Budget von Studierenden.
                      </p>
                      <p>
                        Eine bessere Möglichkeit ist es, sich um{" "}
                        <a
                          href='https://www.stw-muenster.de/studentisches-wohnen/wohnanlagen/'
                          target='_blank'
                          rel='noreferrer'>
                          Wohnungen des Studierendenwerkes
                        </a>{" "}
                        zu bewerben.{" "}
                      </p>
                      <p>
                        Wer das Studierendenleben voll auskosten möchte, sollte
                        sich überlegen in eine WG zu ziehen oder sogar eine
                        Verbindung einzutreten. Hier knüpfst du sofort Kontakte,
                        bist nicht alleine zuhause und sparst außerdem noch
                        Kosten. Wer also mit dem Gedanken spielt, sich aber noch
                        nicht sicher ist, sollte dem gemeinschaftlichen Wohnen
                        eine Chance geben. In 99 Prozent der Fälle lohnt es
                        sich. Die besten Möglichkeit eine WG zu finden hast du
                        bei{" "}
                        <a
                          href='https://www.wg-gesucht.de/'
                          target='_blank'
                          rel='noreferrer'>
                          wg-gesucht.de
                        </a>
                        . Hier inserieren auch einige Verbindungen. Schreibe den
                        WGs die dir gefallen eine offene und lockere Anfrage und
                        denke daran, dass du es hier nicht mit Vermietern,
                        sondern künftigen Mitbewohnern deines Alters zu tun
                        hast. Erzähl ein bisschen was von dir und sei ganz zu
                        selbst. Außerdem solltest du dich nicht aus der Ruhe
                        bringen lassen, wenn es nicht nach der ersten Anfrage
                        klappen sollte, oder du nach dem üblichen Casting (ein
                        kleines Kennenlerngespräch) nicht die erste Wahl der WG
                        bist. Irgendwo in Münster ist garantiert deinen neue
                        WG-Familie.
                      </p>
                      <p>
                        Bei Wikipedia findet sich eine{" "}
                        <a
                          href='https://de.wikipedia.org/wiki/Liste_der_Studentenverbindungen_in_M%C3%BCnster'
                          targer='_blank'
                          rel='noreferrer'>
                          Liste der Verbindungen in Münster
                        </a>
                        . Die Angaben hier sind ohne Gewähr.
                      </p>
                      <p>
                        Weitere Informationen findest du{" "}
                        <a
                          href='https://www.uni-muenster.de/leben/wohnen.html'
                          target='__blank'
                          rel='noreferrer'>
                          hier
                        </a>
                        .
                      </p>
                    </>
                  ) : language === "englisch" ? (
                    <>
                      <p>
                        It is not the easiest task to find a good and
                        inexpensive flat in Münster so don't despair. The best
                        opportunities to find a flat is to register for the{" "}
                        <a
                          href='https://www.stw-muenster.de/studentisches-wohnen/wohnanlagen/'
                          target='_blank'
                          rel='noreferrer'>
                          official student residence
                        </a>{" "}
                        or to search for flat-sharing at{" "}
                        <a
                          href='https://www.wg-gesucht.de/'
                          target='_blank'
                          rel='noreferrer'>
                          wg-gesucht.de
                        </a>
                        . Flat-sharing is always worth it because you are not
                        home alone and automatically find some people to hang
                        out with. If you found a pleasant flat-sharing just
                        contact them via wg-gesucht and do not just say that you
                        are interested. It is usual to further tell them who you
                        are what you are doing and why you think this
                        flat-sharing would be a nice place to live for you. Do
                        not forget that you are talking to your future roommates
                        and not to your landlord so loosen up and text as you
                        would chat with them. If your message is convincing they
                        will invite you to a talk or a videocall and still then
                        they normale got not only you to choose from as their
                        new roomy. Keep that in mind, be kind and hopefuly you
                        will find your new flat-sharing family.
                      </p>
                    </>
                  ) : (
                    <></>
                  )}
                </div>
              </div>
            </Collapse>
          </Col>
          <Col xs='12' md='12'>
            <Button
              variant='secondary'
              onClick={() =>
                setOpen({
                  ...open,
                  [8]: !open[8],
                })
              }
              aria-controls='example-collapse-text'
              aria-expanded={open}>
              {language === "german" ? (
                <>
                  Brauche ich wirklich dringend ein Fahrrad und wo kaufe ich
                  eins?
                </>
              ) : language === "englisch" ? (
                <>Do I really need a bicycle and where can i get one?</>
              ) : (
                <></>
              )}
            </Button>
            <Collapse in={open[8]}>
              <div>
                <div id='faq-2' className='faq-text'>
                  {language === "german" ? (
                    <>
                      <p>
                        Münster ohne Fahrrad ist wie Strand ohne Meer. Eine
                        Leeze, wie das Fahrrad in der münsteraner Masematte
                        genannt wird, ist zwar nicht überlebenswichtig, aber
                        dennoch das Fortbewegungsmittel schlechthin. Nahezu
                        alles kann in maximal 20 Minuten mit dem Fahrrad
                        erreicht werden, es ist wesentlich günstiger als
                        beispielsweise ein Auto, es hält dich fit und ganz
                        nebenbei macht es auch noch Spaß. Gerade weil man fast
                        nie alleine fahren muss und man immer spontan ist, lohnt
                        sich ein Fahrrad. Die Pros sind zahlreich und trotzdem
                        würde es sich auch ohne ein Rad in Münster leben lasse.
                        Durch das Semesterticket, welches sich auf das
                        Smartphone laden oder ausdrucken lässt, können ÖPNVs in
                        ganz NRW kostenlos genutzt werden. Dennoch empfehlen wir
                        das Fahrrad als Teil des Lebens in Münster wahrzunehmen.
                      </p>
                      <p>
                        Entsprechend der hohen Nachfrage sind Fährrader,
                        zumindest gerbauchte in anderen Gemeinden und Kreisen
                        preiswerter zu bekommen, als hier in Münster. Das muss
                        nicht die Regel sein, aber wer die Möglichkeit hat, ein
                        Fahrrad mitzubringen oder woanders einen Preisvergleich
                        durchzuführen, sollte dies tun. Weiter gibt es die
                        Möglichkeit ein Fahrrad zu leihen. Der wohl größte
                        Anbieter in Münster ist{" "}
                        <a
                          href='https://swapfiets.de/offer/munster'
                          target='_blank'
                          rel='noreferrer'>
                          Swapfiets
                        </a>
                        .
                      </p>
                    </>
                  ) : language === "englisch" ? (
                    <>
                      <p>
                        Münster without a bicycle is like a beach without the
                        sea. A Leeze, as the bicycle is called in Münster's
                        dialect, is not essential for survival, but nevertheless
                        the means of transport par excellence. Almost everything
                        can be reached by bike in 20 minutes maximum, it is much
                        cheaper than a car, for example, it is your best workout
                        buddy and besides that it's fun. Especially because you
                        almost never have to ride alone and you very
                        spontaneous, a bicycle is worthwhile. The pros are
                        numerous and yet it would be possible to live in Münster
                        without a bike. The semester ticket, which can be
                        downloaded onto your smartphone or be printed, you can
                        use public transport all over Northrhine Westfalia for
                        free of charge. Nevertheless, we recommend to perceive
                        the bicycle as part of life in Münster.
                      </p>
                      <p>
                        Surely, you can bring your own bike to Münster or you
                        can buy new one or used in Münster. Used ones are
                        usually enough if you just use the bike for your daily
                        needs. Furthermore you could also rent a bike at stores
                        like{" "}
                        <a
                          href='https://swapfiets.de/offer/munster'
                          target='_blank'
                          rel='noreferrer'>
                          Swapfiets
                        </a>
                      </p>
                    </>
                  ) : (
                    <></>
                  )}
                </div>
              </div>
            </Collapse>
          </Col>
          <Col xs='12' md='12'>
            <Button
              variant='secondary'
              onClick={() =>
                setOpen({
                  ...open,
                  [10]: !open[10],
                })
              }
              aria-controls='example-collapse-text'
              aria-expanded={open}>
              {language === "german" ? (
                <>Studierendenkarte/Mesakarte beantragen nicht vergessen!</>
              ) : language === "englisch" ? (
                <>
                  Don't forget to apply for your student ID/Mensacard (Canteen
                  Card)
                </>
              ) : (
                <></>
              )}
            </Button>
            <Collapse in={open[10]}>
              <div>
                <div id='faq-2' className='faq-text'>
                  {language === "german" ? (
                    <>
                      <p>
                        Damit du von der ersten Woche an sofort in der Mensa
                        essen gehen kannst, ohne ständig einen Aufpreis zahlen
                        zu müssen, vergiss nicht, deinen Studierendenausweis zu
                        beantragen.
                        <br />
                        <a
                          href='https://www.uni-muenster.de/studium/orga/studienverwaltung/studierendenkarte.html'
                          target='_blank'
                          rel='noreferrer'>
                          Schau dafür auf dieser Seite
                        </a>
                        , was du tun musst und was der Studierendenausweis noch
                        so alles kann.
                      </p>
                    </>
                  ) : language === "englisch" ? (
                    <>
                      <p>
                        To don't get in trouble by don't having a ID card for
                        the canteen or the library,{" "}
                        <a
                          href='https://www.uni-muenster.de/studium/orga/studienverwaltung/studierendenkarte.html'
                          target='_blank'
                          rel='noreferrer'>
                          check out this page
                        </a>
                        . Here you will get all the information you need for
                        getting your ID card and all the things you can do with
                        it.
                      </p>
                    </>
                  ) : (
                    <></>
                  )}
                </div>
              </div>
            </Collapse>
          </Col>
          <Col xs='12' md='12'>
            <Button
              variant='secondary'
              onClick={() =>
                setOpen({
                  ...open,
                  [11]: !open[11],
                })
              }
              aria-controls='example-collapse-text'
              aria-expanded={open}>
              {language === "german" ? (
                <>Was ist das Kultursemesterticket?</>
              ) : language === "englisch" ? (
                <>
                  What is the Kultursemesterticket (cultural semester ticket)?
                </>
              ) : (
                <></>
              )}
            </Button>
            <Collapse in={open[11]}>
              <div>
                <div id='faq-1' className='faq-text'>
                  {language === "german" ? (
                    <>
                      <p>
                        Das{" "}
                        <a
                          href='https://www.asta.ms/kultursemesterticket'
                          target='_blank'
                          rel='noreferrer'>
                          Kuktursemsterticket
                        </a>{" "}
                        ist Teil deines Studienbeitrages und bringt dir bei
                        aktuell 15 Einrichtungen in Müster Rabatte und teilweise
                        sogar Freikarten oder freien Eintritt. Eine Auflistung
                        der immer aktuellen Angebote findet sich unter der
                        Verlinkung.{" "}
                      </p>
                    </>
                  ) : language === "englisch" ? (
                    <>
                      <p>
                        The{" "}
                        <a
                          href='https://www.asta.ms/kultursemesterticket'
                          target='_blank'
                          rel='noreferrer'>
                          Kuktursemsterticket (cultural semester ticket)
                        </a>{" "}
                        is part of your tuition fee and gives you discounts at a
                        total of currently 15 institutions in Müster and
                        sometimes even free tickets or free admission. A list of
                        the current offers can be found under the given link.
                      </p>
                    </>
                  ) : (
                    <></>
                  )}
                </div>
              </div>
            </Collapse>
          </Col>
          <Col xs='12' md='12'>
            <Button
              variant='secondary'
              onClick={() =>
                setOpen({
                  ...open,
                  [12]: !open[12],
                })
              }
              aria-controls='example-collapse-text'
              aria-expanded={open}>
              {language === "german" ? (
                <>Lohnt sich der Hochschulsport?</>
              ) : language === "englisch" ? (
                <>Is the Hochschulsport (university sports) worthwhile?</>
              ) : (
                <></>
              )}
            </Button>
            <Collapse in={open[12]}>
              <div>
                <div id='faq-2' className='faq-text'>
                  <p>
                    Das Angebot des Hochschulsports ist es absolut wert, es
                    einmal auszuprobieren. Neben einer neuen Sportart können
                    hier auch neue Leute kennengelernt werden. Die Kurse werden
                    immer für ein Semester angeboten und von
                    Ausdauer-Inlineskaten über Quidditch bis hin zu Zumba ist
                    alles vertreten. Das gesamte Kursangebot wird{" "}
                    <a
                      href='https://www.hochschulsport-muenster.de/angebote/aktueller_zeitraum/index.html'
                      target='_blank'
                      rel='noreferrer'>
                      hier
                    </a>{" "}
                    augeführt.{" "}
                  </p>
                  <p>
                    Falls du Interesse an einem oder sogar mehreren Kursen haben
                    solltest, informiere dich rechtzeitig über die Freischaltung
                    der Anmeldung, die nur online stattfindet und sei pünktlich
                    und schnell. Viele Kurse sind in wenigen Minuten oder sogar
                    Sekunden ausgebucht.{" "}
                  </p>
                  <p>
                    Über das Angebot der Kurse hinaus bietet der HSP weiter
                    Touren an, die ebenfalls auf der{" "}
                    <a
                      href='https://www.uni-muenster.de/Hochschulsport/'
                      target='_blank'
                      rel='noreferrer'>
                      Homepage
                    </a>{" "}
                    aufgelistet sind.{" "}
                  </p>
                </div>
              </div>
            </Collapse>
          </Col>
          <Col xs='12' md='12'>
            <Button
              variant='secondary'
              onClick={() =>
                setOpen({
                  ...open,
                  [13]: !open[13],
                })
              }
              aria-controls='example-collapse-text'
              aria-expanded={open}>
              {language === "german" ? (
                <>
                  Gibt es eine Einführungswoche / Orientierungswoche für
                  Erstsemester?
                </>
              ) : language === "englisch" ? (
                <>Is there a welcome event for new students?</>
              ) : (
                <></>
              )}
            </Button>
            <Collapse in={open[13]}>
              <div>
                <div id='faq-2' className='faq-text'>
                  Anim pariatur cliche reprehenderit, enim eiusmod high life
                  accusamus terry richardson ad squid. Nihil anim keffiyeh
                  helvetica, craft beer labore wes anderson cred nesciunt
                  sapiente ea proident.
                </div>
              </div>
            </Collapse>
          </Col>
          <Col xs='12' md='12'>
            <Button
              variant='secondary'
              onClick={() =>
                setOpen({
                  ...open,
                  [14]: !open[14],
                })
              }
              aria-controls='example-collapse-text'
              aria-expanded={open}>
              click
            </Button>
            <Collapse in={open[14]}>
              <div>
                <div id='faq-2' className='faq-text'>
                  Anim pariatur cliche reprehenderit, enim eiusmod high life
                  accusamus terry richardson ad squid. Nihil anim keffiyeh
                  helvetica, craft beer labore wes anderson cred nesciunt
                  sapiente ea proident.
                </div>
              </div>
            </Collapse>
          </Col>
          <Col xs='12' md='12'>
            <Button
              variant='secondary'
              onClick={() =>
                setOpen({
                  ...open,
                  [15]: !open[15],
                })
              }
              aria-controls='example-collapse-text'
              aria-expanded={open}>
              click
            </Button>
            <Collapse in={open[15]}>
              <div>
                <div id='faq-2' className='faq-text'>
                  Anim pariatur cliche reprehenderit, enim eiusmod high life
                  accusamus terry richardson ad squid. Nihil anim keffiyeh
                  helvetica, craft beer labore wes anderson cred nesciunt
                  sapiente ea proident.
                </div>
              </div>
            </Collapse>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default FAQ;
