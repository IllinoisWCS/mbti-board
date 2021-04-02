"use strict";

const mbti = {
    "ENFJ": enfj,
    "ENFP": enfp,
    "ENTJ": entj,
    "ENTP": entp,
    "ESFJ": esfj,
    "ESFP": esfp,
    "ESTJ": estj,
    "ESTP": estp,
    "INFJ": infj,
    "INFP": infp,
    "INTJ": intj,
    "INTP": intp,
    "ISFJ": isfj,
    "ISFP": isfp,
    "ISTJ": istj,
    "ISTP": istp,
};

Object.keys(mbti).forEach((key) => {
    var inner = "";

    Object.keys(mbti[key]).forEach((name_emoji) => {
        inner += name_emoji + ", " + mbti[key][name_emoji] + "<br>";
    });

    document.getElementById(key).innerHTML = inner;
});