# Combat States

## Player Version

### Lobby

* Shows all Player Controlled Combatants
```jsx
<ArpggioCombatComponent>
  <Combatant {...Aragorn} />
  <Combatant {...Legolas} />
  <Combatant {...Gimli} />
</ArpggioCombatComponent>
```
* Maintains HP from previous combat

### In Game

* View only
* (Future) Mark turn as done
* Multiple Combatants
  * Who's active (First, Last, Middle)
```jsx
<ArpggioCombatComponent>
  <Combatant active {...Aragorn} />
  <Combatant {...Legolas} />
  <Combatant {...Gimli} />
</ArpggioCombatComponent>
```

```jsx
<ArpggioCombatComponent>
  <Combatant {...Aragorn} />
  <Combatant active {...Legolas} />
  <Combatant {...Gimli} />
</ArpggioCombatComponent>
```

```jsx
<ArpggioCombatComponent>
  <Combatant {...Aragorn} />
  <Combatant {...Legolas} />
  <Combatant active {...Gimli} />
</ArpggioCombatComponent>
```
* Turn timer
* (Future) Request DM attention button (Icon to DM)

## DM Version

###  Lobby

* Add/Remove/Set Combatants
  * Non player combatants have their visibility set to hidden
* Normal player actions (HP, Notes)

### In Game