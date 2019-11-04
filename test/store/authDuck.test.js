import _ from "lodash";
import Immutable from "seamless-immutable";
import { ActionsObservable } from "redux-observable";
import authServices from "../../src/services/authServices";
import authDuck, { initialState } from "../../redux-store/reducers/auth";
import { selectors, actions } from "../../redux-store/api";
import initAuthStartEpic from "../../redux-store/epics/auth/initAuthStart";
import initAuthSuccessEpic from "../../redux-store/epics/auth/initAuthSuccessEpic";

describe("AuthDuck ", () => {
  describe(" actions ", () => {
    it("should be flux standard ations", () => {
      expect(_.keys(actions.addAccessToken())).toEqual(["type", "payload"]);
      expect(_.keys(actions.initAuthStart())).toEqual([
        "type",
        "payload",
        "meta"
      ]);
      expect(_.keys(actions.initAuthSuccess())).toEqual([
        "type",
        "payload",
        "meta"
      ]);
      expect(_.keys(actions.initAuthFail())).toEqual(["type", "error", "meta"]);
    });
  });

  describe(" selectors ", () => {
    it("should be matching value", () => {
      const state = { auth: initialState };
      expect(selectors.getAccessToken(state)).toEqual(undefined);
    });
  });

  describe(" initialState ", () => {
    it("should be mathing value and immutable", () => {
      expect(initialState).toEqual({ accessToken: undefined });
      expect(Immutable.isImmutable(initialState)).toBe(true);
    });
  });

  describe(" reducer ", () => {
    describe(" case DEFAULT ", () => {
      it("should be function", () => {
        expect(typeof authDuck).toEqual("function");
      });

      it("should be return default state", () => {
        expect(authDuck(initialState, { type: null })).toEqual({
          accessToken: undefined
        });
      });
    });

    describe(" case ADD_ACCESS_TOKEN ", () => {
      it("should be return new State", () => {
        const payload = { user: { token: "1234" } };
        const actualState = authDuck(
          initialState,
          actions.addAccessToken(payload)
        );
        expect(actualState).toEqual({ accessToken: "1234" });
      });

      it("should be return current State", () => {
        const payload = { user: { token: "1234" } };
        const currentState = { accessToken: "1234" };
        const actualState = authDuck(
          currentState,
          actions.addAccessToken(payload)
        );
        expect(actualState).toBe(currentState);
      });
    });
  });

  describe(" epics ", () => {
    it(" initAuthStartEpic manual flow", () => {
      jest
        .spyOn(authServices, "login")
        .mockImplementation(() =>
          Promise.resolve({ user: { token: "abcdef" } })
        );

      initAuthStartEpic(ActionsObservable.of(actions.initAuthStart()))
        .toPromise()
        .then(action => {
          return initAuthSuccessEpic(ActionsObservable.of(action)).toPromise();
        })
        .then(action =>
          expect(authDuck(initialState, action)).toEqual({
            accessToken: "abcdef"
          })
        );
    });
  });
});
