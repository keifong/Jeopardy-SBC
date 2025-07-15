import { useState, useEffect, useRef } from "react";

type CardProps = {
  reward: string;
  question: string;
  answer: string;
};

const MyCard = ({ reward, question, answer }: CardProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [backgroundColor, set_backgroundColor] = useState("");
  const [isVisible, set_isVisible] = useState(false);

  // progress bar
  const [progress, setProgress] = useState(100);
  const [timerActive, setTimerActive] = useState(false);

  // audio
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const audioRef_quang = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    audioRef.current = new Audio("/kahoot_20s_qn.mp3");
    audioRef_quang.current = new Audio("kahoot_quang.mp3");

    return () => {
      audioRef.current?.pause();
      audioRef.current!.currentTime = 0;
    };
  }, []);

  const stopSound = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    } else {
      return;
    }
  };

  const startQuang = () => {
    if (audioRef_quang.current) {
      audioRef_quang.current.pause();
      audioRef_quang.current.currentTime = 0;
      audioRef_quang.current.play();
    }
  };

  const questionSound = (isPlay: number) => {
    if (!audioRef.current) return;
    audioRef.current.currentTime = 0;
    audioRef.current.play();
  };

  const handleClick = () => {
    set_isVisible(false);
    setIsOpen(true);
    setProgress(100);
    setTimerActive(true);
    questionSound(1);
  };

  // const handleClose = () => {
  //   setIsOpen(false);
  //   set_isVisible(false);
  //   stopSound();
  //   correctAnswer();
  // };

  const justClose = () => {
    setIsOpen(false);
    set_isVisible(false);
    setProgress(0);
    stopSound();
  };

  const showAnswer = () => {
    set_isVisible(true);
    setProgress(0);
    stopSound();
    startQuang();
    correctAnswer();
  };

  const correctAnswer = () => {
    set_backgroundColor("grey");
    stopSound();
  };

  // progress bar timer
  useEffect(() => {
    if (!timerActive) return;

    const duration = 20000;
    const intervalMs = 20;
    const step = 100 / (duration / intervalMs);

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev <= 0) {
          clearInterval(interval);
          setTimerActive(false);
          // showAnswer();  
          return 0;
        }
        return prev - step;
      });
    }, intervalMs);

    return () => clearInterval(interval);
  }, [timerActive]);

  return (
    <>
      <div
        className="card-on-home"
        onClick={handleClick}
        style={{ backgroundColor }}
        id="home_card"
      >
        <h3 style={{ textAlign: "center", justifyContent: "center" }}>
          {reward}
        </h3>
      </div>

      {isOpen && (
        <div className="card-background">
          <div id="popup-card">
            <div id="popup-contents">
              <div id="myProgress">
                <div className="progress">
                  <div
                    className="progress-bar gradient-progress"
                    role="progressbar"
                    style={{ width: `${progress}%` }}
                    aria-valuenow={progress}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  ></div>
                </div>
              </div>

              <h1 style={{ whiteSpace: "pre-line" }}>{question}</h1>
              <hr />
              <p style={{ visibility: isVisible ? "visible" : "hidden" }}>
                {answer}
              </p>
            </div>
          </div>
          <div id="button-stack">
            <button onClick={justClose}>Close</button>
            <button onClick={showAnswer}>Show Answer</button>
          </div>
        </div>
      )}
    </>
  );
};

export default MyCard;
