<template>
  <UContainer id="container">
    <NuxtParticles id="tsparticles" :options="options" @load="onLoad"></NuxtParticles>

    <v-container fill-height fluid>
      <v-row>
        <v-col>
          <v-card flat color="transparent" style="padding: 10%">
            <h1 class="glitch text-center" style="font-size: 4vw" data-text="Hi!">
              Hi!
            </h1>
            <h1 class="glitch text-center" style="font-size: 4vw" data-text="I'm Achintya">
              I'm Achintya
            </h1>

            <VueWriter :typeSpeed="70" :cursor="'|'" :array="arr" class="text-center font-italic"
              style="font-size: 1.5vw; font-weight: bold;" />
          </v-card>
        </v-col>
      </v-row>
    </v-container>

  </UContainer>
</template>

<script setup lang="ts">
import type { Container } from 'tsparticles-engine'

const arr = ['Engineer', 'Entrepreneur', 'Thinker'];

// See tsParticles documentation for all available options
const options = {
  autoPlay: true,
  detectRetina: true,
  fpsLimit: 90,
  interactivity: {
    events: {
      onClick: {
        enable: true,
        mode: "push"
      },
      onHover: {
        enable: true,
        mode: "grab",
        parallax: {
          enable: false,
          force: 5,
          smooth: 5,
        }
      }
    }
  },
  move: {
    speed: .75
  },
  number: {
    density: {
      enable: true,
      area: 800,
      factor: 1000
    }
  },
  opacity: {
    random: {
      enable: true,
      minimumValue: 0.1
    },
    value: {
      min: 0.1,
      max: 0.3
    }
  },
  particles: {
    color: {
      value: "#dedede"
    },
    links: {
      blink: true,
      color: "#dedede",
      enable: true,
      distance: 150,
      frequency: 1,
      opacity: 0.4,
      width: 0.4
    },
    move: {
      enable: true,
      speed: .75
    },
    number: {
      density: {
        enable: true,
        area: 800,
        factor: 1000
      },
      limit: 0,
      value: 200
    },
    size: {
      random: {
        enable: true,
        minimunValue: 1
      },
      value: {
        min: 0.1,
        max: 3
      },
      animation: {
        count: 0,
        enable: true,
        speed: 10,
        sync: false,
        destroy: "none",
        minimumValue: 0.1,
        startValue: "random"
      }
    }
  },
}

const onLoad = (container: Container) => {
  // Do something with the container
  container.pause()
  setTimeout(() => container.play(), 2000)
}
</script>

<style>
.fill-height {
  height: 100%;
}

#container {
  position: relative
}

#tsparticles {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  padding: 0;
  margin: 0;
  z-index: 0;
  /* if you use -1 you have to set to `"window"` the interactivity.detectsOn property */
}

/* CREDIT TO VINETOS FOR THIS SLICK GLITCH ANIMATION */
.glitch {
  position: relative;
  color: white;
  font-size: 4em;
  letter-spacing: 0.5em;
  /* Animation provies a slight random skew. Check bottom of doc
  for more information on how to random skew. */
  animation: glitch-skew 1s infinite linear alternate-reverse;
}

.glitch::before {
  content: attr(data-text);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  left: 2px;
  text-shadow: -2px 0 #ff00c1;
  /* Creates an initial clip for our glitch. This works in
    a typical top,right,bottom,left fashion and creates a mask
    to only show a certain part of the glitch at a time. */
  clip: rect(44px, 450px, 56px, 0);
  /* Runs our glitch-anim defined below to run in a 5s loop, infinitely,
    with an alternating animation to keep things fresh. */
  animation: glitch-anim 5s infinite linear alternate-reverse;
}

.glitch::after {
  content: attr(data-text);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  left: -2px;
  text-shadow: -2px 0 #00fff9, 2px 2px #ff00c1;
  animation: glitch-anim2 1s infinite linear alternate-reverse;
}

/* Creates an animation with 20 steaps. For each step, it calculates
a percentage for the specific step. It then generates a random clip
box to be used for the random glitch effect. Also adds a very subtle
skew to change the 'thickness' of the glitch.*/
@keyframes glitch-anim {
  0% {
    clip: rect(93px, 9999px, 90px, 0);
    transform: skew(0.74deg);
  }

  5% {
    clip: rect(99px, 9999px, 47px, 0);
    transform: skew(0.96deg);
  }

  10% {
    clip: rect(60px, 9999px, 50px, 0);
    transform: skew(0.54deg);
  }

  15% {
    clip: rect(41px, 9999px, 28px, 0);
    transform: skew(0.72deg);
  }

  20% {
    clip: rect(84px, 9999px, 20px, 0);
    transform: skew(0.57deg);
  }

  25% {
    clip: rect(2px, 9999px, 29px, 0);
    transform: skew(0.56deg);
  }

  30% {
    clip: rect(2px, 9999px, 84px, 0);
    transform: skew(0.26deg);
  }

  35% {
    clip: rect(37px, 9999px, 45px, 0);
    transform: skew(0.87deg);
  }

  40% {
    clip: rect(52px, 9999px, 33px, 0);
    transform: skew(0.3deg);
  }

  45% {
    clip: rect(72px, 9999px, 92px, 0);
    transform: skew(0.33deg);
  }

  50% {
    clip: rect(12px, 9999px, 8px, 0);
    transform: skew(0.99deg);
  }

  55% {
    clip: rect(9px, 9999px, 35px, 0);
    transform: skew(0.42deg);
  }

  60% {
    clip: rect(20px, 9999px, 2px, 0);
    transform: skew(0.48deg);
  }

  65% {
    clip: rect(36px, 9999px, 58px, 0);
    transform: skew(0.98deg);
  }

  70% {
    clip: rect(1px, 9999px, 63px, 0);
    transform: skew(0.73deg);
  }

  75% {
    clip: rect(56px, 9999px, 35px, 0);
    transform: skew(0.18deg);
  }

  80% {
    clip: rect(57px, 9999px, 76px, 0);
    transform: skew(0.56deg);
  }

  85% {
    clip: rect(91px, 9999px, 35px, 0);
    transform: skew(0.15deg);
  }

  90% {
    clip: rect(1px, 9999px, 30px, 0);
    transform: skew(0.64deg);
  }

  95% {
    clip: rect(33px, 9999px, 78px, 0);
    transform: skew(0.18deg);
  }

  100% {
    clip: rect(29px, 9999px, 34px, 0);
    transform: skew(0.02deg);
  }
}

@keyframes glitch-anim2 {
  0% {
    clip: rect(40px, 9999px, 53px, 0);
    transform: skew(0.63deg);
  }

  5% {
    clip: rect(3px, 9999px, 68px, 0);
    transform: skew(0.43deg);
  }

  10% {
    clip: rect(80px, 9999px, 81px, 0);
    transform: skew(0.19deg);
  }

  15% {
    clip: rect(81px, 9999px, 55px, 0);
    transform: skew(0.48deg);
  }

  20% {
    clip: rect(53px, 9999px, 70px, 0);
    transform: skew(0.16deg);
  }

  25% {
    clip: rect(30px, 9999px, 51px, 0);
    transform: skew(0.64deg);
  }

  30% {
    clip: rect(73px, 9999px, 26px, 0);
    transform: skew(0.57deg);
  }

  35% {
    clip: rect(49px, 9999px, 13px, 0);
    transform: skew(0.16deg);
  }

  40% {
    clip: rect(22px, 9999px, 99px, 0);
    transform: skew(0.48deg);
  }

  45% {
    clip: rect(83px, 9999px, 76px, 0);
    transform: skew(0.53deg);
  }

  50% {
    clip: rect(4px, 9999px, 42px, 0);
    transform: skew(0.24deg);
  }

  55% {
    clip: rect(91px, 9999px, 32px, 0);
    transform: skew(0.65deg);
  }

  60% {
    clip: rect(50px, 9999px, 70px, 0);
    transform: skew(0.95deg);
  }

  65% {
    clip: rect(7px, 9999px, 49px, 0);
    transform: skew(0.15deg);
  }

  70% {
    clip: rect(47px, 9999px, 18px, 0);
    transform: skew(0.65deg);
  }

  75% {
    clip: rect(78px, 9999px, 24px, 0);
    transform: skew(0.02deg);
  }

  80% {
    clip: rect(76px, 9999px, 83px, 0);
    transform: skew(0.77deg);
  }

  85% {
    clip: rect(41px, 9999px, 90px, 0);
    transform: skew(0.66deg);
  }

  90% {
    clip: rect(83px, 9999px, 32px, 0);
    transform: skew(0.94deg);
  }

  95% {
    clip: rect(45px, 9999px, 99px, 0);
    transform: skew(0.31deg);
  }

  100% {
    clip: rect(15px, 9999px, 63px, 0);
    transform: skew(0.07deg);
  }
}

@keyframes glitch-skew {
  0% {
    transform: skew(-1deg);
  }

  10% {
    transform: skew(-4deg);
  }

  20% {
    transform: skew(1deg);
  }

  30% {
    transform: skew(-3deg);
  }

  40% {
    transform: skew(3deg);
  }

  50% {
    transform: skew(2deg);
  }

  60% {
    transform: skew(1deg);
  }

  70% {
    transform: skew(2deg);
  }

  80% {
    transform: skew(-3deg);
  }

  90% {
    transform: skew(0deg);
  }

  100% {
    transform: skew(-2deg);
  }
}
</style>
