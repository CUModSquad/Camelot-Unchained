SkillBar Concept
================

This system will allow for multiple skillbars. There are two different skillbar types:

- persistent
- dynamic

#### Persistent Skill Bars

Persistent skill bars are always active.

There will be 100 keybinds for persistent skillbars:
- PlayerSkillBar1
- ...
- PlayerSkillBar100

#### Dynamic Skill Bars

These skillbars are similar to persistent skill bars, except they are only active based on some criteria

Initially dynamic skillbars could be linked to the players active stance e.g.

- travel stance
- combat stance
- defence stance
- etc

When a user changes stance, their active dynamic skillbars which change.

There will be 100 keybinds for dynamic skillbars:
- PlayerSkillBarDynamic1
- ...
- PlayerSkillBarDynamic100

#### Example

As a full example, we will outline how a user could use this system to create five different skillbars:

##### Stance Skill Bar
This would be a PERSISTENT skill bar.
It could contain buttons to trigger different stance changes.

##### Combat Skill Bar 1
This would be a DYNAMIC skill bar.
It could contain buttons to trigger different combat abilities.
It would only be active when the user is in a specific list of stances (e.g. combat stance, defence stance).

##### Combat Skill Bar 2
This would be a DYNAMIC skill bar.
It could contain buttons to trigger different combat abilities.
It would only be active when the user is in a specific list of stances (e.g. combat stance, defence stance).

##### Travel Skill Bar
This would be a DYNAMIC skill bar.
It would contain buttons to trigger different non combat abilities like harvesting.
It would only be active when the user is in travel stance.

##### Seige Skill Bar
This would be a DYNAMIC skill bar.
It would contain buttons to trigger different siege abilities.
It would only be active when the user is controlling a siege engine.

##### How would it work?

If the player is in travel stance, they would see two active skillbars:
- Stance Skill Bar
- Travel Skill Bar

If the player is in a combat stance, they would see three active skill bars:
- Stance Skill Bar
- Combat Skill Bar 1
- Combat Skill Bar 2

If the player is controlling siege they would see two active skill bars:
- Stance Skill Bar
- Siege Skill Bar


#### Creating & Managing Skill Bars

There would be a UI which allows users to manage their created skill bars.

When adding a skill bar the user can choose its type:
- Persistent
- Dynamic

When managing a specific skill bar the user would be able to add/remove buttons. Each button would allow the user to:
- select a ability to be triggered
- select a keybind to link to the button


#### Types

```ts

// Skill Bars

enum SkillBarType {
  Persistent,
  Dynamic,
}

interface BaseSkillBar {
  id: string;
}

// Persistent Skill Bars

interface PersistentSkillBar extends SkillBar {
  type: SkillBarType.Persistent;
  buttons: PersistentSkillButton[];
}

// Dynamic Skill Bars

interface StanceCondition {
  type: 'stance';
  stances: string[];
}

interface SiegeCondition {
  type: 'siege';
}

type DynamicSkillBarCondition = StanceCondition | SiegeCondition;

interface DynamicSkillBar extends SkillBar {
  type: SkillBarType.Dynamic;
  buttons: DynamicSkillButton[];
  condition: DynamicSkillBarCondition;
}

// KeyBinds
enum PersistentSkillBarKeybinds {
  PlayerSkillBar1,
  // ...
  PlayerSkillBar100,
}
enum DynamicSkillBarKeybinds {
  PlayerSkillBarDynamic1,
  // ...
  PlayerSkillBarDynamic100,
}

// Skill Buttons

interface BaseSkillButton {
  skillBarID: string;
  position: number;
  skillID: string;
}

interface PersistentSkillButton extends BaseSkillButton {
  keybind: PersistentSkillBarKeybinds;
}

interface DynamicSkillButton extends BaseSkillButton {
  keybind: PersistentSkillBarKeybinds;
}
```
